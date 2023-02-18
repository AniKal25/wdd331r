const links = [
    {
      label: "Week 1 Practice: Review Webpage",
      url: "week1/index.html"
      
    },

    {
      label: "Week 2",
      url: "week2/index.html"
      
    },

    {
      label: "Week 3",
      url: "week3/scss-demo.html"
      
    },

    {
      label: "Week 4",
      url: "week4/index.html"
      
    },

    {
      label: "Week 5",
      url: "week5/index.html"
      
    },

    {
      label: "Week 6",
      url: "week6/index.html", 
      
    },

    {
      label: "Week 6 codepen",
      url: "codepen/index.html"
      
    },

    {
      label: "Week 8",
      url: "week8/index.html"
      
    },

    {
      label: "Week 9",
      url: "week9/index.html"
      
    },

    {
      label: "Week 10",
      url: "week10/index.html"
      
    },

    {
      label: "Week 11",
      url: "week11/index.html"
      
    },

    {
      label: "Week 12",
      url: "week12/index.html"
      
    },

    {
      label: "Week 13",
      url: "week13/index.html"
      
    },

  ]

  let ol = document.getElementById("linksList");



for (let i=0; i < links.length; i++) {
    console.log(links)
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = links[i].label;
    a.setAttribute ("href", links[i].url)

    li.append(a);
    ol.append(li);
   
};