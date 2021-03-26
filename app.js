var listaFilmes = [
    {
      name: 'One Piece',
      image: "https://media.fstatic.com/JC6O9Y5dOipvAfnwFV3QTvBsSkQ=/290x478/smart/media/movies/covers/2019/11/mqupeeot6k731.jpg"
    },
    {
      name:'Doctor Stone',
      image: "https://karinsensei.com/wp-content/uploads/2019/06/CAPA-Dr.-Stone1.jpg"
    },
    {
      name:'Attack on Titan',
      image: "https://ptanime.com/wp-content/uploads/2015/02/Attack-on-Titan-Filme-Poster.jpg"
    },
    {
      name:'Bleach',
      image: "http://nokiaotaku.xtgem.com/images/capa.jpg"
    }, 
    {
      name:'Black Clover',
      image: "https://media.fstatic.com/WdJlCFi_CNszZUHxMxnDUhUIzGU=/290x478/smart/media/movies/covers/2017/08/86072l.jpg"
    }, 
    {
      name:'One Punch Man',
      image: "https://gamehall.com.br/wp-content/uploads/2016/01/One-Punch-Man-Capa-Anime.jpg"
    } 
         
];
const catalogo = document.getElementById("catalogo");
for (var i = 0; i < listaFilmes.length; i++) {
    const list = document.createElement("li");
    const imageBox = document.createElement("div");
    const image = document.createElement("img");
    const animeTitle = document.createElement("h2");
    image.src = listaFilmes[i].image
    animeTitle.innerHTML=listaFilmes[i].name
    imageBox.appendChild(image)
    list.appendChild(imageBox);
    list.appendChild(animeTitle);
    catalogo.appendChild(list);
}