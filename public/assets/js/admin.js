function adminLogin() {
    let data = $("#adminLogin").serialize();
    $.ajax({
        method: "POST",
        url: base_url + "/admin/login",
        dataType: "json",
        data: data,
        beforeSend: function () {
            $(".invalid-feedback").remove();
            $("form input").removeClass("is-invalid state-invalid");
            showLoader();
            btn_disable("#submit_btn");
        },
        error: function (error) {
            let resp = JSON.parse(error.responseText);
            btn_enable("#submit_btn", "Login");

            if (typeof resp.success != "undefined" && resp.success == false) {
                $.each(resp.data, function (input, msg) {
                    $("#" + input).after(
                        `<div class="invalid-feedback">` + msg + `</div>`
                    );
                    $("#" + input).addClass("is-invalid state-invalid");
                });
                Notiflix.Notify.failure(resp.error);
            } else {
                error_popup();
            }
        },
        success: function (resp) {
            if (resp.success === true) {
                Notiflix.Notify.success(resp.msg);
                window.location.href = base_url + "/admin/dashboard";
            }
        },
        complete: function (resp) {
            btn_enable("#submit_btn", "Login");
            removeLoader();
        },
    });
}

function eventAjax(url) {
    var formData = new FormData(document.getElementById("event_form"));
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
            $("form input,form textarea").removeClass(
                "is-invalid state-invalid"
            );
            Notiflix.Loading.hourglass("Please wait..");
            btn_disable("#submit_btn");
        },
        success: function (resp) {
            if (resp.success === true) {
                Notiflix.Notify.success(resp.msg);
                window.location.href = base_url + "/admin/event/listing";
            }
        },
        error: function (error) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "submit");
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
            btn_enable("#submit_btn", "submit");
        },
    });
}

function eventGalleryAjax(url) {
    var formData = new FormData(document.getElementById("event_form"));
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
            $("form input,form textarea").removeClass(
                "is-invalid state-invalid"
            );
            Notiflix.Loading.hourglass("Please wait..");
            btn_disable("#submit_btn");
        },
        success: function (resp) {
            if (resp.success === true) {
                Notiflix.Notify.success(resp.msg);
                window.location.href =
                    base_url +
                    "/admin/event/gallery/view/" +
                    resp.data.event_id;
            }
        },
        error: function (error) {
            Notiflix.Loading.remove();
            btn_enable("#submit_btn", "submit");
            let resp = JSON.parse(error.responseText);
            if (typeof error.status !== "undefined" && error.status === 422) {
                $.each(resp.errors, function (input, msg) {
                    if (input == "event") {
                        $("select[name='" + input + "']")
                            .next()
                            .after(
                                `<div class="invalid-feedback">` +
                                    msg[0] +
                                    `</div>`
                            );
                        $("select[name='" + input + "']")
                            .next()
                            .addClass("is-invalid");
                    } else {
                        $(
                            "input[name='" +
                                input +
                                "'],select[name='" +
                                input +
                                "'],textarea[name='" +
                                input +
                                "']"
                        ).after(
                            `<div class="invalid-feedback">` + msg[0] + `</div>`
                        );
                        $(
                            "input[name='" +
                                input +
                                "'],select[name='" +
                                input +
                                "'],textarea[name='" +
                                input +
                                "']"
                        ).addClass("is-invalid");
                    }
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
            btn_enable("#submit_btn", "submit");
        },
    });
}

function editEventGallery(editId) {
    let url = base_url + "/admin/event/gallery/edit/" + editId;
    eventGalleryAjax(url);
}

function addEventGallery() {
    let url = base_url + "/admin/event/gallery/add";
    eventGalleryAjax(url);
}

function addEvent() {
    let url = base_url + "/admin/event/add";
    eventAjax(url);
}

function editEvent(editId) {
    let url = base_url + "/admin/event/edit/" + editId;
    eventAjax(url);
}

function submitForm(event, el) {
    event.preventDefault();
    ajaxFormSubmit(el);
}

function ajaxFormSubmit(el) {
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
            btn_enable(`#${submit_btn}`, "submit");
            let resp = JSON.parse(error.responseText);
            if (typeof error.status !== "undefined" && error.status === 422) {
                $.each(resp.errors, function (input, msg) {
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
                            `<div class="invalid-feedback">` + msg[0] + `</div>`
                        );
                        $("input[name='" + input + "']").addClass("is-invalid");
                    }
                });
                Notiflix.Notify.failure(
                    "Please make sure all fields are filled in correctly"
                );
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
            btn_enable(`#${submit_btn}`, "submit");
        },
    });
}

function error_popup(
    msg = SERVER_ERR_MSG,
    reload = false,
    redirect_url = false,
    new_tab = false
) {
    Notiflix.Report.failure("Failure", msg, false, function () {
        if (reload == true) {
            location.reload();
        }

        if (redirect_url && new_tab == false) {
            window.location.href = redirect_url;
        }

        if (redirect_url && new_tab == true) {
            window.open(redirect_url, "_blank");
        }
    });
}

function success_popup(
    msg = null,
    reload = false,
    redirect_url = false,
    new_tab = false
) {
    Notiflix.Report.success("Success", msg, false, function () {
        if (reload == true) {
            location.reload();
        }

        if (redirect_url && new_tab == false) {
            window.location.href = redirect_url;
        }

        if (redirect_url && new_tab == true) {
            window.open(redirect_url, "_blank");
        }
    });
}

function confirm_popup(
    url = null,
    confirm_msg = "Are you sure want to delete ?"
) {
    Notiflix.Confirm.show("Delete", confirm_msg, false, false, function () {
        Notiflix.Loading.hourglass("Please wait..");
        window.location.href = url;
    });
}

function get_token() {
    return $("input[name=_token]").val();
}

function btn_disable(btn_id_class) {
    $(btn_id_class).html(
        '<i class="fa fa-circle-o-notch fa-spin"></i> Please wait..'
    );
    $(btn_id_class).attr("disabled", "disabled");
}

function btn_enable(btn_id_class, txt) {
    $(btn_id_class).removeAttr("disabled", "disabled");
    $(btn_id_class).text(txt);
}

function redirect_url(obj, url, show_loder_only = false) {
    if (show_loder_only == true) {
        current_html = obj.html();
        obj.html(
            '<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp' + current_html
        );
    }

    if (show_loder_only == false) {
        obj.html(
            '<i class="fa fa-circle-o-notch fa-spin"></i>&nbspPlease wait..'
        );
    }

    obj.attr("disabled", "disabled");
    window.location.href = url;
}

function showLoader() {
    Notiflix.Loading.hourglass("Please wait..");
}

function removeLoader() {
    Notiflix.Loading.remove();
}

function initializeEventElement() {
    $(".event-image").each(function (key, val) {
        $(this).attr("name", "image_" + key);
    });

    $(".event-input").each(function (key, val) {
        $(this).attr("name", "title_" + key);
        $(this).next("input").val($(this).val());
    });

    $(".event-label").each(function (key, val) {
        $(this).html("Image " + parseInt(key + 1));
    });
}

function eventAddMore(el) {
    var html = `<div class="mb-3 event-sec">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label event-label">Event 2</label>
											  <input type="hidden" name="temp[]">
                      </div>
                      <div class="col-md-9">
                        <div class="row">
                          <div class="col-md-3 col-lg-4 col-sm-12">
                            <input type="file" class="event-image"/>
                          </div>	
                          <div class="col-md-4 col-sm-12">
                            <input type="text" placeholder="Enter Title"  class="form-control event-input">
                          </div>
                          <div class="col-md-2 col-sm-12 add-more-sec">
                            <button type="button" onClick="eventAddMore($(this))" class="btn btn-success btn-sm">Add More +</button>
                          </div>
                          <div class="col-md-2 col-sm-12 remove-sec">
                            <button type="button" onClick="eventRemove($(this))" class="btn btn-danger btn-sm">Remove X</button>
                          </div>			
                        </div>
                      </div>
                    </div>
                  </div>`;
    $(".event-wrapper").append(html);
    el.remove();
    initializeEventElement();
}

function deleteEventGalleryImage(imgId) {
    let url = base_url + "/admin/event/gallery/delete/" + imgId;

    $.get(url, {}, function (resp) {
        console.log(resp);
    });
}

function eventRemove(el) {
    if (typeof el.data("gallery-id") != "undefined") {
        deleteEventGalleryImage(el.data("gallery-id"));
    }

    el.parents(".event-sec").remove();

    var add_more_btn = `
                      
                        <button type="button" onClick="eventAddMore($(this))" class="btn btn-success btn-sm">Add More +</button>
                      
                    `;
    $(".event-wrapper")
        .find(".event-sec:last")
        .find(".add-more-sec")
        .html(add_more_btn);
    initializeEventElement();
}

$(document).ready(function () {
    $("form").submit(function () {
        btn_disable("#submit_btn");
        //showLoader();
    });

    if ($("#link_type").length > 0) {
        $("#link_type").change(function () {
            let link_type = $(this).val();

            $(".file-sec,.url-sec").addClass("d-none");

            if (link_type === "file") {
                $(".file-sec").removeClass("d-none");
            }

            if (link_type === "url") {
                $(".url-sec").removeClass("d-none");
            }
        });
    }
});
