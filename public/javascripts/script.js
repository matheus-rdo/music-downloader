var links = []

$(document).ready(() => {

    $('#add-music').on('click', () => {
        const input = $('#link-input')
        const value = input.val();

        if (value) {
            $('#links').append(`<li class="list-group-item"><a href="${value}" target="_blank">${value}</a></li>`)
            $('.toast').toast('show');
            input.val('')
            links.push(value)
        } else {
            input.addClass("is-invalid")
        }

    })

})