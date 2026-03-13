/**<td class="grade">LG</td>
<td class="name"><div><img src="http://t1.daumcdn.net/media/img-section/sports13/logo/team/1/SK_300300.png" alt=""><span>SSG</span></div></td>
<td class="round">144</td>
<td class="win">85</td>
<td class="compare">3</td>
<td class="lose">56</td>
<td class="winRate">0.603</td>
<td class="dis">0.0</td>
<td class="seqLose">3패</td> */

let body = document.getElementsByTagName("tbody");
fetch("https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json")
.then(response =>{
    return response.json()
}).then(data =>{

    for(let i = 1;i <= 10; i++){
        let tr = document.createElement("tr");

        for()
    }
})