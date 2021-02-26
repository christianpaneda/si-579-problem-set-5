// I used the D3 (https://d3js.org/) library to create a very simple bar graph using real data from my friend, Kaitlin
// I used Bootstrap css to make the structure of the page better (used a grid)

let instagramData = [
    216, 343, 310, 421, 393, 426, 485, 377, 350
]

let instagramDates = [
    "12/21", "12/23", "12/24", "1/1", "1/9", "1/13", "2/1", "2/13", "2/23"
]

const instagramSvg = d3.select("svg");

const scale = d3.scaleLinear()
    .domain([0, 600])
    .range([0, 250])

const instagramLikes = instagramSvg
    .selectAll("g")
    .data(instagramData)
    .enter()
    .append("g")
    .attr("transform", (d, i) => {
        return "translate(" + (i * 60) + ",0)"
    })

instagramLikes
    .append("rect")
    .attr("width", 40)
    .attr("height", d => {
        return scale(d) 
    })
    .attr("x", 0)
    .attr("y", d => {
        return 250 - scale(d)
    })

instagramLikes
    .data(instagramData)
    .append("text")
    .attr("x", 20)
    .attr("y", d=> {
        return 275 - scale(d)
    })
    .text(d => {
        return d
    }) 

instagramLikes
    .data(instagramDates)
    .append("text")
    .attr("x", 20)
    .attr("y", 275)
    .text(d => {
        return d
    })



