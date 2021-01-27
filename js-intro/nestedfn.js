let num = 10
function global(){
    let num = 20
    console.log(num)
    function local(){
        let num = 30
        console.log(num)
    }
    local()
}
global()

