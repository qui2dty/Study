using System;

public class Solution {
    public int solution(int angle) {
        int answer = 0;
        if(0 < angle && angle < 90){
            return 1;
        }
        if( angle == 90){
            return 2;
        }
        if(90 < angle && angle < 180){
            return 3;
        }
        if( angle ==180 ){
            return 4;
        }
        return 0;
    }
}