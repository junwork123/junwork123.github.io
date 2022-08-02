//App.js
import styled from "styled-components";

// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;

function App() {
	return (
		<FlexContainer>
			<h1>공유하기</h1>
			<GridContainer>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
			</GridContainer>
		</FlexContainer>
	);
}

export default App;