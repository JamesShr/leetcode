var isValidSudoku = function (board) {
    let verify = true;
    // x
    if (verify) {
        for (let i = 0; i < 9; i++) {
            let verifyValue = {};
            for (let x = 0; x < 9; x++) {
                if(board[i][x]!=='.'){
                    if(verifyValue[board[i][x]]){
                        verify = false;
                    }else{
                        verifyValue[board[i][x]]=true;
                    }
                }
            }
        }
    }

    // y
    if (verify) {
        for (let i = 0; i < 9; i++) {
            let verifyValue = {};
            for (let x = 0; x < 9; x++) {
                if(board[x][i]!=='.'){
                    if(verifyValue[board[x][i]]){
                        verify = false;
                    }else{
                        verifyValue[board[x][i]]=true;
                    }
                }
                
            }

        }
    }


    // 3x3 
    if (verify) {
        let verifyValue = {};
        for(let i = 0; i < 9; i++){
            const xAxis = parseInt(i/3)
            for(let x = 0; x < 9; x++){
                const yAxis = parseInt(x/3)
                if(!verifyValue[`${xAxis}-${yAxis}`]){verifyValue[`${xAxis}-${yAxis}`] = {}}
                if(board[i][x]!=='.'){
                    if(verifyValue[`${xAxis}-${yAxis}`][board[i][x]]){
                        verify = false;
                    }else{
                        verifyValue[`${xAxis}-${yAxis}`][board[i][x]]=true;
                    }
                }
            }
        }
    }

    return verify
};