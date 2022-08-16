import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        int[][] paths = {
                {1,5,1,1},
                {1,2,4,3},
                {1,3,3,2},
                {2,5,2,1},
                {2,4,2,3},
                {3,4,2,2},
        };
        int[] result = solution.solution(5,4, paths);
        System.out.printf("return : %d %d", result[0], result[1]);
    }
}
