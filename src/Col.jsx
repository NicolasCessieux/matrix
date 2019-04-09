import React from 'react';

const matrix=new Array();
matrix[0]=new Array("1","0","0"); 
matrix[1]=new Array("0","1","0");  
matrix[2]=new Array("1","1","0"); 

class Col extends React.Component{
    render() {
       return(
        <div>
            <table>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            </table> 
        </div>)
       }
 }

export default Col;