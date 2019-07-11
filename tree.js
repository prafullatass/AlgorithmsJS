// made a array as stack to solve the problem

const Oju = {
    name : "Oju",
    childern : []
}

const Jim = {
    name : "jim",
    childern : [Oju]
}

const grandPa ={
    name : "Bob",
    childern : [Jim]
}

const findName = (name, root) => {
    if(root.name === name)
        return true;
    else
    {
        var arr = root.childern;
        while (arr.length > 0)
        {
            var newNode = arr.pop();
            if(newNode.name === name)
                return true;
            arr.push(newNode.childern);
        }
        return false;
    }
}


console.log(findName(Oju, grandPa));

