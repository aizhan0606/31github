const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '111111111',
        '222222222',
        '333333333',
        '444444444'
    ]}
]

const $site = document.querySelector('#site');

model.forEach(block =>{
   let html = ''

    if (block.type === 'title'){
       html = title(block)
    } else if (block.type === 'text'){
        html = text(block)
    } else if (block.type === 'columns'){
        html = columns(block)
    }
    $site.insertAdjacentHTML('beforeend', html)
})

function title(block){
    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
</div>
    `
}

function text(block){
    return `
    <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function columns(block){
    let html = ''
    block.value.forEach(item => {
       html += `
       <div class="col-sm">
        ${item}
   </div>
       ` 
    })
   return`
   <div class="row">
               
                <div class="col-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur.
                </div>
                <div class="col-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur.
                </div>
            </div>
   ` 
}