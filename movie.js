
$("#movietable").DataTable({
    "ajax": "movie.json",
    "order": [[ 1, "desc" ]],
    "displayLength": 5,
    "lengthMenu": [[5, 10, -1],[5, 10, "All"]]
});

$("#favmovie").tooltipster( {
    content: $("#explanation").detach()
});
