var checkedUsers = [];

function addUser(firstname, lastname, email) {
    if (validateUserName(firstname) && validateUserName(lastname) && validateEmail(email)) {
        var elements = document.getElementsByClassName("row");
        clearErorrs();
        var table = document.getElementsByTagName('tbody');

        // var header = document.getElementsByClassName("header");
        // var td1Header = createElement('td');
        // td1Header = addClass(td1Header, 'choose');
        // td1Header.innerHTML += 'Позначити';
        // header[0].prepend(td1Header);

        var tr = createElement('tr');
        var rowId = 'row' + elements.length + 1;
        tr = addId(tr, rowId)
        tr = addClass(tr, 'row');
        table[0].append(tr);

        var td1 = createElement('td');
        td1 = addClass(td1, 'ifEdit');
        var span1 = createElement('span');
        span1.innerHTML += firstname;
        span1 = addClass(span1, 'row-value firstname');
        td1.append(span1);
        var input1 = createElement('input');
        input1.type = 'text';
        input1 = addClass(input1, 'edit inputFirstName');
        input1.value  += firstname;
        var spanError = createElement('span');
        spanError = addId(spanError, 'error-edit-firstname');
        spanError = addClass(spanError, 'error');
        td1.append(span1);
        td1.append(input1);
        td1.append(spanError);

        var td2 = createElement('td');
        td2 = addClass(td2, 'ifEdit');
        var span2 = createElement('span');
        span2.innerHTML += lastname;
        span2 = addClass(span2, 'row-value lastname');
        var input2 = createElement('input');
        input2.type = 'text';
        input2 = addClass(input2, 'edit inputLastName');
        input2.value  += lastname;
        var spanError2 = createElement('span');
        spanError2 = addId(spanError2, 'error-edit-lastname');
        spanError2 = addClass(spanError2, 'error');
        td2.append(span2);
        td2.append(input2);
        td2.append(spanError2);

        var td3 = createElement('td');
        td3 = addClass(td3, 'ifEdit');
        var span3 = createElement('span');
        span3.innerHTML += email
        span3 = addClass(span3, 'row-value email');
        var input3 = createElement('input');
        input3.type = 'text';
        input3 = addClass(input3, 'edit inputEmail');
        input3.value  += email;
        var spanError3 = createElement('span');
        spanError3 = addId(spanError3, 'error-edit-email');
        spanError3 = addClass(spanError3, 'error');
        td3.append(span3);
        td3.append(input3);
        td3.append(spanError3);

        var td4 = createElement('td');
        var dateOfCreation = getNowTime();
        td4.innerHTML += dateOfCreation;

        var td5 = createElement('td');
        var button = createElement('button');
        button = addClass(button, 'btn-danger')
        button.innerHTML += 'Delete';
        button.onclick = function deleteUser() {
            var element = document.getElementById(rowId);

            element.remove();
        };

        var button2 = createElement('button');
        button2 = addClass(button2, 'btn-warning')
        button2.innerHTML += 'Edit';
        button2.onclick = function editUser() {
            initializedEdit(rowId);
        };

        var button3 = createElement('button');
        button3 = addClass(button3, 'edit btn-success')
        button3.innerHTML += 'Save';
        button3.onclick = function save() {
            var row = document.getElementById(rowId);
            var elementFirstname = row.getElementsByClassName("firstname")[0];
            var elementLastname = row.getElementsByClassName("lastname")[0];
            var elementEmail = row.getElementsByClassName("email")[0];

            var inputFirstname = row.getElementsByClassName("inputFirstName")[0].value;
            var inputLastname = row.getElementsByClassName("inputLastName")[0].value;
            var inputEmail = row.getElementsByClassName("inputEmail")[0].value;

            if(validateUserName(inputFirstname) && validateUserName(inputLastname) && validateEmail(inputEmail)) {
                elementFirstname.innerHTML = inputFirstname;
                elementLastname.innerHTML = inputLastname;
                elementEmail.innerHTML = inputEmail;
                finishEditing(rowId);
                clearEditingErorrs();
            } else {
                getErorrsEditing(inputFirstname, inputLastname, inputEmail);
            }

        };
        td5.append(button);
        td5.append(button2);
        td5.append(button3);

        var td6 = createElement('td');
        td6.style.border = 'none';
        td6.className = 'choose';

        var input = createElement('input');
        input.onclick = function checkedUser() {
            var exist = false;
            var row = document.getElementById(rowId);
            if (checkedUsers.length) {
                for (var i = 0; i <= checkedUsers.length; i++) {
                    if (checkedUsers[i] && checkedUsers[i] === rowId) {
                        row.style.background = '#ffffff'
                        exist = true;
                        checkedUsers = checkedUsers.filter(e => e !== rowId);
                    }
                }
                if (!exist) {
                    row.style.background = '#e2e2e2'
                    checkedUsers.push(rowId);
                }
            } else {
                row.style.background = '#e2e2e2'
                checkedUsers.push(rowId);
            }
        };
        input = addClass(input, 'checkbox choose');
        input.type = 'checkbox';
        input.style.width = '30px';
        input.style.height = '30px';
        td6.prepend(input);


        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.prepend(td6);

        clearFields();
    } else {
        getErorrs(firstname, lastname, email);
    }
}

function clearErorrs() {
    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-lastname').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
}

function clearEditingErorrs() {
    document.getElementById('error-edit-firstname').innerHTML = '';
    document.getElementById('error-edit-lastname').innerHTML = '';
    document.getElementById('error-edit-email').innerHTML = '';
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
}

function getErorrs(firstname, lastname, email) {
    if (!validateUserName(firstname)) {
        errorFirstName();
    } else {
        document.getElementById('error-name').innerHTML = '';
    }

    if (!validateUserName(lastname)) {
        errorLastName();
    } else {
        document.getElementById('error-lastname').innerHTML = '';
    }

    if (!validateEmail(email)) {
        errorEmail();
    } else {
        document.getElementById('error-email').innerHTML = '';
    }
}

function errorFirstName() {
    document.getElementById('error-name').innerHTML = 'Некоректне ім\'я!';
}

function errorLastName() {
    document.getElementById('error-lastname').innerHTML = 'Некоректне прізвище!';
}

function errorEmail() {
    document.getElementById('error-email').innerHTML = 'Некоректний email!';
}

function getErorrsEditing(firstname, lastname, email) {
    if (!validateUserName(firstname)) {
        errorEditFirstName();
    } else {
        var el = document.getElementById('error-edit-firstname');
        el.innerHTML = '';
    }

    if (!validateUserName(lastname)) {
        errorEditLastName();
    } else {
        document.getElementById('error-edit-lastname').innerHTML = '';
    }

    if (!validateEmail(email)) {
        errorEditEmail();
    } else {
        document.getElementById('error-edit-email').innerHTML = '';
    }
}

function errorEditFirstName() {
    document.getElementById('error-edit-firstname').innerHTML = 'Некоректне ім\'я!';
}

function errorEditLastName() {
    document.getElementById('error-edit-lastname').innerHTML = 'Некоректне прізвище!';
}

function errorEditEmail() {
    document.getElementById('error-edit-email').innerHTML = 'Некоректний email!';
}

function allowChooseUsers() {
    var rows = document.getElementsByClassName('row');
    if (rows.length) {
        var chooses = document.getElementsByClassName('choose');
        if (chooses.length) {
            for (var choose of chooses) {
                if (choose.style) {
                    choose.style.display = "block";
                }
            }
        }
        alignAddedHeaders();
    } else {
        alert('Немає користувачів!');
    }
}

function disableChooseUsers() {
    checkedUsers = [];

    var rows = document.getElementsByClassName('row');
    if(rows.length) {
        for(var row of rows) {
            if(row.style) {
                row.style.background = '#ffffff'
            }
        }
    }

    var checkboxes = document.getElementsByClassName('checkbox');
    if (checkboxes.length) {
        for (var checkbox of checkboxes) {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        }
    }

    var chooses = document.getElementsByClassName('choose');
    if (chooses.length) {
        for (var choose of chooses) {
            if (choose.style) {
                choose.style.display = "none";
            }
        }
    }

    hideAllAddedHeaders();
}

function deleteCheckedUsers() {
    if (checkedUsers.length) {
        for (var i = 0; i < checkedUsers.length; i++) {
            var user = checkedUsers[i];
            var row = document.getElementById(user);
            row.remove();
        }
        disableChooseUsers();
    } else {
        alert('Немає позначених користувачів!')
    }
}

function initializedEdit(rowId) {
    var row = document.getElementById(rowId);
    if (row) {
        var edits = row.getElementsByClassName('edit');
        if (edits.length) {
            for (var edit of edits) {
                if (edit.style) {
                    edit.style.display = "table-cell";
                }
            }
        }

        var rowValues = row.getElementsByClassName('row-value');
        if (rowValues.length) {
            for (var rowValue of rowValues) {
                if (rowValue.style) {
                    rowValue.style.display = "none";
                }
            }
        }
    }
}

function finishEditing(rowId) {
    var row = document.getElementById(rowId);
    if (row) {
        var edits = row.getElementsByClassName('edit');
        if (edits.length) {
            for (var edit of edits) {
                if (edit.style) {
                    edit.style.display = "none";
                }
            }
        }

        var rowValues = document.getElementsByClassName('row-value');
        if (rowValues.length) {
            for (var rowValue of rowValues) {
                if (rowValue.style) {
                    rowValue.style.display = "table-cell";
                }
            }
        }
    }
}

function alignAddedHeaders() {
    var headerMarkup = document.getElementsByClassName('header-markup');

    headerMarkup[0].style.display = 'table-cell'
}

function hideAllAddedHeaders() {
    var headerMarkup = document.getElementsByClassName('header-markup');

    headerMarkup[0].style.display = 'none'
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateUserName(name) {
    var re = /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;
    return re.test(name)
}

function createElement(value) {
    return document.createElement(value);
}

function addId(element, value) {
    element.id = value;
    return element;
}

function addClass(element, value) {
    element.className = value
    return element;
}

function getNowTime() {
    var today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let hr = today.getHours();
    let m = today.getMinutes();

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd + ' ' + hr + ':' + m;
    return today;
}




