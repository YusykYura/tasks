function getModal(modalId) {
    return document.getElementById(modalId);
}

function createElement(value) {
    return document.createElement(value);
}

function addId(element, value) {
     element.id = value;
    return element;
}

function addClass(element, value) {
    element.className = value;
    return element;
}

function showModal() {
    var div = createElement('div');
    div = addClass(div, "modal");
    div = addId(div, 'myModal');

    document.body.append(div);

    var div2 = createElement('div');
    div2 = addClass(div2, "modal-content");

    div.append(div2);

    var span = createElement('span');
    span = addClass(span, 'close');
    span.innerHTML += '&times;';
    span.onclick = function hideModal() {
        var modal = getModal('myModal');
        modal.remove();
    };

    div2.append(span);

    var div3 = createElement('div');
    var h1 = createElement('h1');
    var p = createElement('p');
    h1.innerHTML += 'Вітаємо у модальному вікні!';
    p.innerHTML += 'Вітаємо у модальному вікні!';
    div3.append(h1);
    div3.append(p);

    div2.append(div3);





    var modal = getModal('myModal');

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.remove();
        }
    }
}





