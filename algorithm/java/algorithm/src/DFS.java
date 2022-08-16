import java.util.*;

class DFS {
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    static boolean[] visited;
    static int[] distance;

    public int solution(int n, int[][] edge) {
        visited = new boolean[n + 1];
        distance = new int[n + 1];
        int answer = 0;

        for (int i = 0; i <= n; i++) {
            graph.add(i, new ArrayList<>());
            distance[i] = Integer.MAX_VALUE;
        }

        for (int i = 0; i < edge.length; i++) {     // 양방향 추가해주기
            graph.get(edge[i][0]).add(edge[i][1]);
            graph.get(edge[i][1]).add(edge[i][0]);
        }
        dfs(1, 0);

        int max = 0;
        for (int i = 2; i <= n; i++) {      // 가장 멀리 떨어진 거리
            max = Math.max(max, distance[i]);
        }

        for (int i = 2; i <= n; i++) {      // 가장 멀리 떨어진 노드 개수
            if (distance[i] == max) {
                answer++;
            }
        }

        return answer;
    }

    public static void dfs(int start, int cnt) {
        distance[start] = Math.min(distance[start], cnt);

        for (int adj : graph.get(start)) {
            if (!visited[adj]) {
                visited[adj] = true;
                dfs(adj, cnt + 1);
                visited[adj] = false;
            }
        }
    }
}