$(document).ready(function () {
    $("#rooms").val(1);
    $(document).on('click', '.buttons .add', function () {
        var plusValue = parseInt($(this).next('input').val());
        if (!isNaN(plusValue)) {
            $(this).next('input').val(plusValue + 1);
        } else {
            $(this).next('input').val(1);
        }
        var father = $(this).parent().parent().prop('className');
        var gfather = $(this).parent().parent().parent().attr('id');
        insertEle(plusValue + 1, father, gfather);
    });

    // decrement value minus one
    $(document).on('click', '.buttons .remove', function () {
        var minusValue = parseInt($(this).prev('input').val());
        if (!isNaN(minusValue) && minusValue > 0) {
            $(this).prev('input').val(minusValue - 1);
        } else {
            $(this).prev('input').val(1);
        }
        var father = $(this).parent().parent().prop('className');
        var gfather = $(this).parent().parent().parent().attr('id');
        removeEle(minusValue, father, gfather)
    });

    function insertEle(value, father, gfather) {
        if (father == 'rooms') {

            addroom(value, father);
        }
        if (father == 'children') {
            addchild(value, father, gfather);
        }
        if (father == "infants") {
            addInfant(value, father, gfather);
        }

    }


    function removeEle(value, father) {
        $("#" + father + "-" + value).remove();
    }


    function addroom(value, father) {
        $(".rooms").after(`
    <div class="childs"
     id="` + father + `-` + value + `"
     >
       <div class="adult">
            <label>بزرگسال</label>
            <div class="buttons">
                <button type="button" class="add">+</button>
                <input type="number" min="0">
                <button type="button" class="remove">-</button>
            </div>
        </div>
        <div class="children">
            <label>خردسال</label>
            <div class="buttons">
                <button type="button" class="add" id="test">+</button>
                <input type="number" min="0" class="child-in" value="0">
                <button type="button" class="remove">-</button>
            </div>
        </div>
        <div class="infants">
            <label>نوزاد</label>
            <div class="buttons">
                <button type="button" class="add">+</button>
                <input type="number" min="0" id="infant-in" value="0">
                <button type="button" class="remove">-</button>
            </div>
        </div>
    <hr>
    </div>
    `);
    }

    function addchild(value, father, gfather) {
        $("#" + gfather).append(`
    <div class="child-out" 
    id="` + father + `-` + value + `">
        <label>سن خردسال</label>
        <div class="buttons">
            <input type="number" min="0">
        </div>
    </div>
    `)
    };

    function addInfant(value, father, gfather) {
        $("#" + gfather).append(`
    <div class="infant-out" 
    id="` + father + `-` + value + `">
        <label>سن نوزاد</label>
        <div class="buttons">
            <input type="number" min="0">
        </div>
    </div>
    `)
    };

// function createAdult(){
//   var adultdiv = document.createElement('div');
//       adultdiv.addClass('adultdiv');
//   var label1 = document.createElement("label");
//   label1.innerHTML = "ّبزرگسال";
//
//
//
// };


});





