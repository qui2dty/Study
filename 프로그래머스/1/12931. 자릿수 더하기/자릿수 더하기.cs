using System;
using System.Linq;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        int[] arr = n.ToString().Select(ns => int.Parse(ns.ToString())).ToArray();

        for(int i =0; i<arr.Length; i++){
            answer += arr[i];
        }
        
        return answer;
    }
}