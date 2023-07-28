function solution(n, computers) {
    
    // 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	
    let visited = Array(n+1).fill(0);
    let answer = 0;
    for (let i=1; i<n+1;i++){
        if(visited[i] == 0){
            console.log(i)
            dfs(i)
            answer +=1
        }
    }
    
    function dfs(start){
        if (visited[start] == 1){
            return
        }
        else {
            visited[start] = 1;
            console.log(visited)
            const togoList = computers[start-1];
            // togoList = [1,1,0]
            togoList.forEach((isavail, index) => {
                if (isavail==1 && 
                    visited[index+1] ==0 &&
                    start-1 != index ){
                    dfs(index+1);
                }
            } )
        }
    }
    
    
    return answer;
}