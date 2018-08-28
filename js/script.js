$(document).ready(function () {
    $('#form-btn').on('click', function () {
        $.ajax({
            url: "ajax-post.php",
            type: "POST",
            data: $('#form').serialize(),
            success: function (data) {
                console.log(data);
                $('.form-block')[0].innerHTML = "<div class=\"request\">\n" +
                    "<div class=\"row\">\n" +
                    "<div class=\"col-12 text-center p-t_1r\">\n" +
                    "<div class=\"svg-container\">\n" +
                    "<svg class=\"ft-green-tick\" xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n" +
                    "<circle class=\"circle\" fill=\"#5bb543\" cx=\"24\" cy=\"24\" r=\"22\"></circle>\n" +
                    "<path class=\"tick\" fill=\"none\" stroke=\"#FFF\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M14 27l5.917 4.917L34 17\"></path>\n" +
                    "</svg></div>\n" +
                    "</div>\n" +
                    "<div class=\"col-12\">\n" +
                    "<div class=\"req-text text-center\">\n" +
                    "<span style=\"font-size: 1.25rem\">Ваша заявка принята! Мененджеры свяжутся с Вами в ближайшее время!</span>\n" +
                    "</div></div>\n" +
                    "<div class=\"col-12 text-center\">\n" +
                    "<a href=\"/\" style=\"font-size: 1rem\">Сделать заказ еще раз!</a>\n" +
                    "</div>\n" +
                    "</div>\n" +
                    "</div>";
            }
        });
    })
});