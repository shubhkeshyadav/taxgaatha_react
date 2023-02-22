function submitFormData(event, el) {
    event.preventDefault();
    webFormSubmit(el);
}

function webFormSubmit(el) {
    let formId = el.attr("id");
    let url = el.data("url");
    let redirect_url = el.data("redirect_url");
    let submit_btn = el.data("submit_id");

    let input_type = {};

    if (typeof el.data("input_type") !== "undefined") {
        input_type = el.data("input_type");
    }

    var formData = new FormData(document.getElementById(formId));
    ajax_resp = $.ajax({
        url: url,
        data: formData,
        type: "post",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".invalid-feedback").remove();
            $("span").removeClass("border-red");
            $("form input,form textarea").removeClass(
                "is-invalid state-invalid"
            );
            showLoader();
            btn_disable(`#${submit_btn}`);
        },
        success: function (resp) {
            if (resp.success === true) {
                let id = resp.data.id;
                Notiflix.Notify.success(resp.msg);
                window.location.href = redirect_url;
            }
        },
        error: function (error) {
            removeLoader();
            btn_enable(`#${submit_btn}`, "Submit");
            let resp = error.responseJSON;
            if (typeof error.status !== "undefined" && error.status === 400) {
                $.each(resp.data, function (input, msg) {
                    if (input_type.hasOwnProperty(input)) {
                        type = input_type[input];
                        if (type === "select") {
                            $("select[name='" + input + "']")
                                .next()
                                .after(
                                    `<div class="invalid-feedback">` +
                                        msg[0] +
                                        `</div>`
                                );
                            $("select[name='" + input + "']")
                                .next()
                                .addClass("is-invalid border-red");
                        }

                        if (type === "textarea") {
                            $("textarea[name='" + input + "']").after(
                                `<div class="invalid-feedback">` +
                                    msg[0] +
                                    `</div>`
                            );
                            $("textarea[name='" + input + "']").addClass(
                                "is-invalid"
                            );
                        }

                        if (type === "file") {
                            $("input[name='" + input + "']")
                                .parent()
                                .after(
                                    `<div class="invalid-feedback">` +
                                        msg[0] +
                                        `</div>`
                                );
                            $("input[name='" + input + "']")
                                .parent()
                                .after()
                                .addClass("is-invalid");
                        }
                    } else {
                        $("input[name='" + input + "']").after(
                            `<div class="invalid-feedback">` + msg + `</div>`
                        );
                        $("input[name='" + input + "']").addClass(
                            "is-invalid state-invalid"
                        );
                    }
                });
                Notiflix.Notify.failure(resp.error);
            } else {
                error_popup();
            }
        },
        complete: function () {
            Notiflix.Loading.remove();
            btn_enable(`#${submit_btn}`, "Submit");
        },
    });
}

function show_loader() {
    Notiflix.Loading.hourglass("Please wait..");
}

function hide_loader() {
    Notiflix.Loading.remove();
}

function adminResetPasswordOTPEmail(url = base_url + "/reset-password") {
    var formData = new FormData(document.getElementById("reset_password"));
    ajax_resp = $.ajax({
        url: url,
        data: formData,
        type: "post",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".invalid-feedback").remove();
            $("form input").removeClass("is-invalid state-invalid");
            $("form textarea").removeClass("is-invalid state-invalid");
            Notiflix.Loading.hourglass("Please wait..");
            btn_disable("#submit_btn");
        },
        success: function (resp) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");

            if (resp.success === true) {
                success_popup(resp.msg);
                $("#email_new").val(resp.data.email);
                $("#reset_password").addClass("d-none");
                $("#reset_password_frm").removeClass("d-none");
            }
        },
        error: function (error) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");

            //let resp = error.responseJSON;
            let resp = JSON.parse(error.responseText);

            if (typeof error.status !== "undefined" && error.status === 400) {
                $.each(resp.data, function (input, msg) {
                    $("#" + input).after(
                        `<div class="invalid-feedback">` + msg + `</div>`
                    );
                    $("#" + input).addClass("is-invalid state-invalid");
                });
            } else if (
                typeof resp.success !== "undefined" &&
                error.status === 400
            ) {
                error_popup(resp.error);
            } else {
                error_popup();
            }
        },
        complete: function () {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");
        },
    });
}

function adminPasswordChange(
    url = base_url + "/change-password",
    isUser = false
) {
    var formData = new FormData(document.getElementById("reset_password_frm"));

    ajax_resp = $.ajax({
        url: url,
        data: formData,
        type: "post",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".invalid-feedback").remove();
            $("form input").removeClass("is-invalid state-invalid");
            $("form textarea").removeClass("is-invalid state-invalid");
            Notiflix.Loading.hourglass("Please wait..");
            btn_disable("#submit_btn");
        },
        success: function (resp) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");

            if (resp.success === true) {
                success_popup(resp.msg);
                $("#reset_password_frm")[0].reset();

                setTimeout(function () {
                    if (isUser == true) {
                        window.location.href = base_url + "/user-login";
                    } else {
                        window.location.href = base_url + "/dashboard-login";
                    }
                }, 3000);
            }
        },
        error: function (error) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");

            //let resp = error.responseJSON;
            let resp = JSON.parse(error.responseText);

            if (typeof error.status !== "undefined" && error.status === 400) {
                $.each(resp.data, function (input, msg) {
                    $("#" + input).after(
                        `<div class="invalid-feedback">` + msg + `</div>`
                    );
                    $("#" + input).addClass("is-invalid state-invalid");
                });

                if (resp.success == false) {
                    Notiflix.Notify.failure(resp.error);
                }
            } else if (
                typeof resp.success !== "undefined" &&
                error.status === 400
            ) {
                error_popup(resp.error);
            } else {
                error_popup();
            }
        },
        complete: function () {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "Next");
        },
    });
}

function load_ajax_table_data(url, render_section_class) {
    if (url == "javascript:void(0);") {
        return false;
    }

    show_loader();

    $.ajax({
        url: url,
    })
        .done(function (data) {
            $("." + render_section_class).html(data);
            hide_loader();
            window.history.pushState(false, false, url);
        })
        .fail(function () {
            hide_loader();
            Notiflix.Notify.failure("Data could not be loaded");
        });
}

function searchBlog() {
    let keyword = document.getElementsByName("blog_search")[0].value;

    window.location.href = "/articles?k=" + keyword;
}

function searchAct() {
    var form_data = $("#search_form").serialize();

    url = window.location.href.split("?")[0];

    url = url + "?" + form_data;

    load_ajax_table_data(url, "web-paginate-data");
}

$(document).ready(function () {
    if ($(".web-paginate-data .pagination li a").length > 0) {
        $("body").on(
            "click",
            ".web-paginate-data .pagination li a",
            function (e) {
                e.preventDefault();
                load_ajax_table_data($(this).attr("href"), "web-paginate-data");
            }
        );
    }
});

function storeInquiry() {
    var formData = new FormData(document.getElementById("contactus_form"));

    let url = base_url + "/contacts";

    ajax_resp = $.ajax({
        url: url,
        data: formData,
        type: "post",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".invalid-feedback").remove();
            $("form input").removeClass("is-invalid state-invalid");
            $("form textarea").removeClass("is-invalid state-invalid");
            Notiflix.Loading.hourglass("Please wait..");
            btn_disable("#add_tender");
        },
        success: function (resp) {
            if (resp.success === true) {
                Notiflix.Notify.success(resp.msg);
                $("#contactus_form")[0].reset();
            }
        },
        error: function (error) {
            //let resp = error.responseJSON;
            let resp = JSON.parse(error.responseText);
            if (typeof error.status !== "undefined" && error.status === 422) {
                $.each(resp.errors, function (input, msg) {
                    $("#" + input).after(
                        `<div class="invalid-feedback">` + msg[0] + `</div>`
                    );
                    $("#" + input).addClass("is-invalid state-invalid");
                });
            } else if (
                typeof resp.success !== "undefined" &&
                error.status === 400
            ) {
                error_popup(resp.error);
            } else {
                error_popup();
            }
        },
        complete: function () {
            Notiflix.Loading.remove();
            btn_enable("#add_tender", "submit");
        },
    });
}
