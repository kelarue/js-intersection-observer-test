let observer = new IntersectionObserver((observables) => {
    observables.forEach((observable) =>{
        console.log(observable.intersectionRatio);
        if (observable.isIntersecting){
            
            observable.target.classList.remove('not-visible');
            observer.unobserve(observable.target);
        }
        // else {
        //     observable.target.classList.add('not-visible');
        // }
    })
},{
    threshold: [0.5]
}
);


fetch('./generated.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    let elements = document.querySelector(".elements");
    let i=0;
    data.forEach((item) => {
        // console.log(item)
        let itemDiv = "<div class='row element not-visible itemElement itemElement"+i+"'><div class='col-lg-3'>"+item.address+"</div><div class='col-lg-3'>"+item.company+"</div><div class='col-lg-3'>"+item.name+"</div><div class='col-lg-3'>"+item.phone+"</div></div>";
        elements.innerHTML += itemDiv;
        i++;
    });
  })
  .then(data => {
    let itemElements = document.querySelectorAll(".element");
    itemElements.forEach(itemElement => {
        observer.observe(itemElement);
    })
  }).catch(err => {
    // Do something for an error here
  });