---
emoji: 🔮
title: 스프링 MVC 객체와 버전별 차이
date: '2022-08-09 00:00:00'
author: 주녁
tags: 스프링 Spring MVC Controller Model View
categories: Spring
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

# # Spring MVC 객체와 버전별 차이

이번 포스팅에서는

Spring에서 사용하는 MVC 모델이 발전해온 과정을

간략한 코드를 통해 살펴보도록 하겠다.

(이 글은 인프런 김영한님 강의를 바탕으로 작성되었습니다.)

---

<br/>

## MVC 버전1

- 매개변수 : request, response

- 반환값 : void

- 각 Controller가 View의 물리적인 주소를 직접 매핑하고 렌더링한다. (중복 발생)

<br/>

```java
@Override
    public void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // request에서 값을 가져온다.
        String username = request.getParameter("username");
        int age = Integer.parseInt(request.getParameter("age"));

        // 서비스 실행
        Member member = new Member(username, age);
        memberRepository.save(member);

        // View에 전달할 값을 설정하고 View를 생성한다.
        request.setAttribute("member", member);
        String viewPath = "/WEB-INF/views/save-result.jsp";
        RequestDispatcher dispatcher = request.getRequestDispatcher(viewPath);
        dispatcher.forward(request, response);
    }
```

---

<br/>

## MVC 버전2

- 매개변수 : request, response

- 반환값 : <u>View</u>

- Controller가 Request에 값 객체를 넣고,

  물리적인 주소를 담은 View를 만들어서 전달한다.

- <u>View 객체는 렌더링을 담당한다.</u>

<br/>

```java
@Override
    public MyView process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // request에서 값을 가져온다.
        String username = request.getParameter("username");
        int age = Integer.parseInt(request.getParameter("age"));

        // 서비스 실행
        Member member = new Member(username, age);
        memberRepository.save(member);

        // View에 전달할 값을 설정하고 View를 생성한다.
        request.setAttribute("member", member);
        return new MyView("/WEB-INF/views/save-result.jsp");
    }
```

```java
    public class MyView {
        private String viewPath;

        // View의 주소를 생성자를 통해 설정한다.
        public MyView(String viewPath) {
            this.viewPath = viewPath;
        }

        // 매핑된 주소로 연결한다.
        public void render(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
            RequestDispatcher dispatcher = request.getRequestDispatcher(viewPath);
            dispatcher.forward(request, response);
        }
    }
```

---

<br/>

## MVC 버전3

- 매개변수 : <u>Map<String, String> paramMap </u>

- 반환값 : <u>ModelView</u>

- request 대신 Model Map을 통하여 매개변수를 전달받는다

- Controller가 ModelView를 생성하여 논리적인 주소와 값 객체를 전달한다.

- ModelView는 <u>논리적인 주소와 Model Map(값 객체 맵)</u>를 담고 있다.

  → request, response는 크기에 비해 일부만 사용하기 때문

```java
    @Override
    public ModelView process(Map<String, String> paramMap) {
        // paramMap에서 값을 가져온다.
        String username = paramMap.get("username");
        int age = Integer.parseInt(paramMap.get("age"));

        // 서비스 실행
        Member member = new Member(username, age);
        memberRepository.save(member);

        // ModelView에 전달할 값을 설정하고 ModelView를 생성한다.
        ModelView mv = new ModelView("save-result");
        mv.getModel().put("member", member);**
        return mv;
    }
```

<br/>

```java
@Getter @Setter
public class ModelView {
    private String viewName;
    private Map<String, Object> model = new HashMap<>();

    public ModelView(String viewName) {
        this.viewName = viewName;
    }
}
```

---

<br/>

## MVC 버전4

- 매개변수 : <u>paramMap</u> / <u>model</u>

- 반환값 : <u>논리적인 주소(String)</u>

- V3에서 ModelView를 각각 컨트롤러가 생성하는 코드가 중복되어 제거한다.

- <u>Front Cotroller에서 값이 담긴 모델 맵을 각 컨트롤러에 전달</u>한다.

- 컨트롤러는 <u>값 객체에 값을 넣고, 논리적인 주소만을 전달</u>한다.

<br/>

```java
    @Override
    public String process(Map<String, String> paramMap, Map<String, Object> model) {
        // paramMap에서 값을 가져온다.
        String username = paramMap.get("username");
        int age = Integer.parseInt(paramMap.get("age"));

        // 서비스 실행
        Member member = new Member(username,age);
        memberRepository.save(member);

        // Model에 값을 넣고 논리적인 주소만 전달한다.
        model.put("member", member);
        return "save-result";**
    }
```

---

<br/>

## MVC 버전5

- 다양한 형태의 컨트롤러를 지원하기 위해 Adapter를 사용한다.

- <u>FrontController에서 컨트롤러마다 Adapter를 지정한다.</u>

  → 큰 코드변경 없이 다양한 컨트롤러를 매핑할 수 있다. (컨트롤러가 아니여도 된다)

<br/>

```java
@WebServlet(name = "frontControllerServletV5", urlPatterns = "/front-controller/v5/*")
public class FrontControllerServletV5 extends HttpServlet {
    //private Map<String, **ControllerV4**> controllerMap = new HashMap<>();
    private final Map<String, **Object**> handlerMappingMap = new HashMap<>();
    private final List<MyHandlerAdapter> handlerAdapters = new ArrayList<>();

    public FrontControllerServletV5() {
        initHandlerMappingMap();
        initHandlerAdapters();
    }

// V3, V4를 적용할 수 있는 어댑터를 핸들러와 매핑한다.
private void initHandlerMappingMap() {
        handlerMappingMap.put("/front-controller/v5/v3/members/new-form", new MemberFormControllerV3());
        handlerMappingMap.put("/front-controller/v5/v3/members/save", new MemberSaveControllerV3());
        handlerMappingMap.put("/front-controller/v5/v3/members", new MemberListControllerV3());

        // V4 추가
        handlerMappingMap.put("/front-controller/v5/v4/members/new-form", new MemberFormControllerV4());
        handlerMappingMap.put("/front-controller/v5/v4/members/save", new MemberSaveControllerV4());
        handlerMappingMap.put("/front-controller/v5/v4/members", new MemberListControllerV4());
    }

    private void initHandlerAdapters() {
        handlerAdapters.add(new ControllerV3HandlerAdapter());
        handlerAdapters.add(new ControllerV4HandlerAdapter());
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 1. 핸들러 조회
        Object handler = getHandler(request);
        if(handler == null){
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        // 2. 핸들러를 처리 가능한 어댑터 조회
        MyHandlerAdapter adapter = getHandlerAdapter(handler);

        // 3. 어댑터가 가진 핸들러 동작 = ModelView 반환
        ModelView mv = adapter.handle(request, response, handler);

        // 4. ViewResolver 호출
        String viewName = mv.getViewName();
        MyView view = viewResolver(viewName);

        // 5. View Render()
        view.render(mv.getModel(), request, response);
    }

    private MyHandlerAdapter getHandlerAdapter(Object handler) {
        for (MyHandlerAdapter adapter : handlerAdapters) {
            if(adapter.supports(handler)){
                return adapter;
            }
        }

        throw new IllegalArgumentException("handler adapter를 찾을 수 없습니다. handler = " + handler);
    }
    private MyView viewResolver(String viewName) {
        MyView view = new MyView("/WEB-INF/views/" + viewName + ".jsp");
        return view;
    }

    private Object getHandler(HttpServletRequest request) {
        String requestURI = request.getRequestURI();
        Object handler = handlerMappingMap.get(requestURI);
        return handler;
    }
}
```

<br/>

```java
// 어댑터 인터페이스
public interface **MyHandlerAdapter** {
 boolean **supports**(Object handler);
 ModelView **handle**(HttpServletRequest request, HttpServletResponse response, Object handler) throws ServletException, IOException;
}
```

<br/>

```java
public class ControllerV3HandlerAdapter implements MyHandlerAdapter {
    @Override
    public boolean supports(Object handler) {
        return (handler instanceof ControllerV3);
    }

    @Override
    public ModelView handle(HttpServletRequest request, HttpServletResponse response, Object handler) throws ServletException, IOException {
        ControllerV3 controller = (ControllerV3) handler;

        Map<String, String> paramMap = createParamMap(request);

        ModelView modelView = controller.process(paramMap);

        return modelView;
    }

    // request로 들어온 파라미터들을 쭉 저장해주는 paramMap 생성
    private Map<String, String> createParamMap(HttpServletRequest request) {
        Map<String, String> paramMap = new HashMap<>();
        request.getParameterNames().asIterator()
                .forEachRemaining(paramName -> paramMap.put(paramName, request.getParameter(paramName)));
        return paramMap;
    }
}
```

<br/>

```java
public class ControllerV4HandlerAdapter implements MyHandlerAdapter{
	@Override
	    public boolean supports(Object handler) {
	return(handler instanceof ControllerV4);
	}

	@Override
	    public ModelView handle(HttpServletRequest request, HttpServletResponse response, Object handler)throws ServletException, IOException{
	ControllerV4 controllerV4 =(ControllerV4)handler;

	        Map<String, String>paramMap = createParamMap(request);
	        HashMap<String, Object>model = new HashMap<>();
	        String viewName = controllerV4.process(paramMap, model);

	        ModelView modelView = new ModelView(viewName);
	        modelView.setModel(model);
	        return modelView;
	}

	// request로 들어온 파라미터들을 쭉 저장해주는 paramMap 생성
	    private Map<String, String>createParamMap(HttpServletRequest request){
	HashMap<String, String>paramMap = new HashMap<>();
	        request.getParameterNames().asIterator()
	.forEachRemaining(paramName -> paramMap.put(paramName, request.getParameter(paramName)));
	        return paramMap;
	}
}
```

<br/><br/>

_출처_

_[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)_

_[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)_

<br/>

---

```toc

```
