/**<td class="grade">LG</td>
<td class="name"><div><img src="http://t1.daumcdn.net/media/img-section/sports13/logo/team/1/SK_300300.png" alt=""><span>SSG</span></div></td>
<td class="round">144</td>
<td class="win">85</td>
<td class="compare">3</td>
<td class="lose">56</td>
<td class="winRate">0.603</td>
<td class="dis">0.0</td>
<td class="seqLose">3패</td> */

let body = document.getElementById("tbody");
let html = "";
fetch("https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json")
.then(response =>{
    return response.json()
}).then(data =>{

    for(let i = 0;i < 10; i++){

        let tr = document.createElement("tr");
        let str = ""
    
        str += `<td class="grade" style="padding: 0px; text-align: center">${i + 1}</td>
                <td class="name">
                    <div>
                        <img src="${data.list[i].imageUrl}" alt="">
                        <span>${data.list[i].shortName}</span>
                    </div>
                </td>
                <td class="round">${data.list[i].rank.game}</td>
                <td class="win">${data.list[i].rank.win}</td>
                <td class="compare">${data.list[i].rank.draw}</td>
                <td class="lose">${data.list[i].rank.loss}</td>
                <td class="winRate">${data.list[i].rank.wpct}</td>
                <td class="dis">${data.list[i].rank.gb}</td>
                <td class="seqLose">${data.list[i].rank.streak}</td>`
        
        tr.innerHTML = str;

        body.appendChild(tr);
    }
})