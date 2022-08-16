import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class BFS {
    private ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    private boolean[] visited;

    private int answer;

    public int getAnswer() {
        return answer;
    }

    public BFS(int n, int[][] edge) {
        visited = new boolean[n + 1];

        createGraph(n, edge);
        answer = getLongestNodeCount(1);
    }

    void createGraph(int n, int[][] edge) {
        for (int i = 0; i <= n; i++) {
            graph.add(i, new ArrayList<>());
        }

        for (int i = 0; i < edge.length; i++) {
            // graph.get(key).add(갈 수 있는 value)
            // 방향성이 없으므로 양방향으로 추가
            graph.get(edge[i][0]).add(edge[i][1]);
            graph.get(edge[i][1]).add(edge[i][0]);
            //System.out.println("edge[i][0] : " + edge[i][0]);
            //System.out.println("edge[i][1] : " + edge[i][1]);
            //System.out.println(graph);
        }

//        for(int i=1; i<=n; i++) {
//            // 정렬
//            Collections.sort(graph.get(i));
//        }
    }

    // 가장 긴 경로가 몇개인지 출력
    int getLongestNodeCount(int start) {
        // 시작 위치를 방문할 곳에 넣고 반복문 시작
        // 시작 위치를 방문했던 곳에 넣음
        Queue<Integer> toVisit = new LinkedList<>(); // 방문할 곳
        toVisit.add(start);
        visited[start] = true;

        // 방문했던 곳이라면 패스
        // 아니라면 방문할 곳으로 큐에 넣음
        int cnt = 0;
        while (true) {
            Queue<Integer> longestNodes = new LinkedList<>();

            while (!toVisit.isEmpty()) {
                int cur = toVisit.poll();
                for (int adj : graph.get(cur)) {
                    if (!visited[adj]) {
                        longestNodes.add(adj);
                        visited[adj] = true;
                    }
                }
            }

            // 이전 길이보다 더 갈 곳이 없다면 종료
            if (longestNodes.isEmpty()) break;

            // 이전 길이보다 더 갈 곳이 있다면 갱신
            toVisit.addAll(longestNodes);
            cnt = longestNodes.size();
        }

        return cnt;
    }
}
