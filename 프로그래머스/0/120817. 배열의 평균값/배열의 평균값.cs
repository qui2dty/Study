using System;
using System.Linq;

public class Solution {
    public double solution(int[] numbers) {
        double answer = 0;
        int sum = numbers.Sum();
        answer = (double)sum / (double)numbers.Length;
        return answer;
    }
}