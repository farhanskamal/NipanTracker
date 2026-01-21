$("#AddManga").click(function() {
    var mangaTitle = $("#MangaTitle").val();
    $("#MangaList").append("<li>" + mangaTitle + "</li>");
})

$("#AddAnime").click(function() {
    var animeTitle = $('#AnimeTitle').val();
    $("#AnimeList").append("<li>" + animeTitle + "</li>");
})