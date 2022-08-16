import java.util.*;

class Solution {
    public int[] solution(int n, int k, int[][] paths) {
        BFS bfs = new BFS(n, k, paths);
        return bfs.getDistanceAndMileage();
    }

    class Path implements Comparable<Path>{
        public int from, toGo, distance, mileage;
        public List<Integer> route = new ArrayList<>();

        public Path(int from, int toGo, int distance, int mileage){
            this.from = from;
            this.toGo = toGo;
            this.distance = distance;
            this.mileage = mileage;
        }

        @Override
        public int compareTo(Path o){
            // 거리가 더 짧으면 우선
            if(this.distance < o.distance){
                return -1;
            }else if(this.distance > o.distance){
                return 1;
            }else{
                // 마일리지가 더 크면 우선
                if(this.mileage < o.mileage){
                    return 1;
                }else if(this.mileage > o.mileage){
                    return -1;
                }
                return 0;
            }
        }
    }
    class BFS{
        int airPorts = 0;
        int start = 1, end = 1; // 시작지점은 무조건 1
        ArrayList<ArrayList<Path>> graph = new ArrayList<>();

        public BFS(int n, int k, int[][] edge){
            this.end = k;
            createGraph(n, edge);
        }
        void createGraph(int n, int[][] edge){
            this.airPorts = n;

            for(int i=0; i<=this.airPorts; i++){
                graph.add(i, new ArrayList<>());
            }

            for(int i=0; i<edge.length; i++){
                // 양방향으로 그래프 정보 생성
                graph.get(edge[i][0]).add(new Path(edge[i][0], edge[i][1], edge[i][2], edge[i][3]));
                graph.get(edge[i][1]).add(new Path(edge[i][1], edge[i][0], edge[i][2], edge[i][3]));
            }
        }
        int[] getDistanceAndMileage(){
            List<Path> result = new ArrayList<>();

            Queue<Path> toVisit = new LinkedList<>(); // 방문할 곳
            boolean[] visited = new boolean[this.airPorts+1]; // 방문했던 곳

            // 시작지점 삽입
            toVisit.addAll(graph.get(this.start));
            visited[this.start] = true;

            while(true){
                Queue<Path> nextNodes = new LinkedList<>();

                // 현재 방문할 곳이 비었으면 종료
                // 큐에서 path를 하나씩 뽑아서 반복
                while(! toVisit.isEmpty()){
                    Path cur = toVisit.poll();

                    for(Path adj : graph.get(cur.toGo)){
                        if(visited[adj.toGo] == true) continue;

                        adj.mileage += cur.mileage;
                        adj.distance += cur.distance;
                        adj.route.add(cur.from);
                        visited[adj.from] = true;

                        if(adj.toGo == this.end){
                            result.add(adj);
                        }
                        nextNodes.add(adj);
                    }
                }
                if(nextNodes.isEmpty()) break;

                toVisit.addAll(nextNodes);
            }
            Collections.sort(result);

            int[] resultArr = new int[2];
            resultArr[0] = result.get(0).distance;
            resultArr[1] = result.get(0).mileage;
            return resultArr;
        }
    }
}