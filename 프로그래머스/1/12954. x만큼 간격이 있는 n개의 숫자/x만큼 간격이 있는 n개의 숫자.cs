public class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        
        for(long i =0; i<n; i++){
            answer[i] = x*(i+1); // 2*(0+1),2*(1+1),2*(2+1),2*(3+1),2*(4+1)
            // 2,4,6,8,10
        } 
        
        return answer;
    }
}