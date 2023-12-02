/*** Za pomoca fetch pobierz listę postów z api o adresie https://jsonplaceholder.typicode.com/posts* 
 * W każdym z postów znajduje się userId, które określa da
 * ne użytkownika pod adresem 
 * https://jsonplaceholder.typicode.com/users/userId* Napisz skrypt, 
 * który po pobraniu listy postów i użytkowników wygeneruje dokument html z tabelą o trzech
 *  kolumnach* nazwa użytkownka - name* tytuł posta - title* treść posta - body* Nazwa użytkownika 
 * musi być linkiem lub przyciskiem, który 
 * po kliknięciu otwiera nowy dokument z wszystkimi danymi użytkownika i linkiem powrotnym* do strony z postami.*/

window.onload = async function(){

  const table = document.getElementById('posts');

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

 async function fetchUser(userId){
  const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await response.json();
  return user;
 }

 function generateTableHeaders(){
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const bodyCell = headerRow.insertCell(0);
    const titleCell = headerRow.insertCell(0);
    const nameCell = headerRow.insertCell(0);
    nameCell.innerHTML = 'NAME';
    titleCell.innerHTML = 'TITLE';
    bodyCell.innerHTML = 'BODY';
    table.appendChild(header);
 }

 async function fillTable(posts){
  const body = table.createTBody();
  for(let post of posts){
    let user = await fetchUser(post.userId);
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = user.name;
    link.onclick = () => generateUserInfo(user);
    console.log(link)
    let row = body.insertRow(0);
    let bodyCell = row.insertCell(0);
    let titleCell = row.insertCell(0);
    let nameCell = row.insertCell(0);
    nameCell.appendChild(link);
    titleCell.innerHTML = post.title;
    bodyCell.innerHTML = post.body
    table.appendChild(body)
  }
 }

 function generateUserInfo(user){
  let container = "<div>";
  container += `<a href="index.html" id="back">BACK</a>`
  container += `<div>${user.id}</div>`
  container += `<div>${user.name}</div>`
  container += `<div>${user.email}</div>`
  container += "</div>"
  document.body.innerHTML = container;
  document.getElementById("back").addEventListener("click",goBack);
 }

 function goBack(){
  history.back();
 }

 const posts = await fetchPosts();
 generateTableHeaders();
 fillTable(posts);

}