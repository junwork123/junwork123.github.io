public class Floyd {
    int n; //그래프 정점의 개수
    int[][] graph; // index를 1부터 맞추기 위해 n+1
    int[][] floyd; // 가중치 계산 그래프

    public Floyd(int n, int[][] edge) {
        this.n = n;
        this.graph = edge;
        setFloydGraph();
        execute();
    }
    private void setFloydGraph() {
        floyd = new int[n + 1][n + 1];
        for (int i = 1; i < floyd.length; i++) {
            for (int j = 1; j < floyd.length; j++) {
                if (i == j)
                    floyd[i][j] = 0; //노드를 0개 거쳐가는 경우는 자기 자신뿐이다.
                else //불가능한 경우는 매우 큰값을 넣는다. 모든 노드를 거쳐간 값보다도 클 수 있도록
                    floyd[i][j] = 999_999_999;
            }
        }
    }
    private void execute() {
        // 플루이드-워셜 알고리즘 실행
        for (int i = 1; i < floyd.length; i++) {
            for (int j = 1; j < floyd.length; j++) {
                for (int k = 1; k < floyd.length; k++) {
                    // 기존 j -> k까지의 거리와, i번째 노드를 거쳐가는 거리를 비교해 최단거리 갱신
                    floyd[j][k] = Math.min(floyd[j][k], floyd[j][i] + floyd[i][k]);
                }
            }
        }
    }

    private void putEdge(int x, int y, int edge) {
        graph[x][y] = edge;
        graph[y][x] = edge;
    }

    public void print(int[][] graph) {
        for (int i = 1; i < graph.length; i++) {
            for (int j = 1; j < graph.length; j++) {
                if (graph[i][j] == 999_999_999)
                    System.out.print("INF ");
                else
                    System.out.print(graph[i][j] + " ");
            }
            System.out.println();
        }
    }

}
