$(".recent-slider").each(function() {
            $(this).append('<div id="slider"></div>');
            var e = $(this).attr("data-label"),
                n = "https://rss.rtcs.live/feeds/posts/summary/-/" + e + "?max-results=" + 5 + "&alt=json-in-script",
                l = $(this);
            $.ajax({
                type: "GET",
                url: n,
                async:true,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(s) {
                    for (var r = 0; r < s.feed.entry.length; r++) {
                        for (var n = s.feed.entry[r], i = 0; i < n.link.length; i++)
                            if ("alternate" == n.link[i].rel) {
                                var o = n.link[i].href;
                                break
                            }
                        try {
                            var c = n.media$thumbnail.url.replace("s72-c", "h300-w1200-no")
                        } catch (p) {
                            var c = "https://lh3.googleusercontent.com/24RAodFW8xxgzHpVBAthJHsf_szjRoa3-KzlAEdFgB6X6A5Gmlm-nCvt5nRkE95T52PmHSE4Mf5wvNGoRUgIXjjHi4PjiucY3RimpoVdiTPKQN5Jdj2n9-9bW0wUSzQcirYstqGO8Unv5v7RMU5JD_Q-lEuBgtUfXEmHxOs6ENvJBanzORTRCVXwSzYNRJxijualu8mHhR5S6DG8l4CIo6uADoudrzXGsz7oszRXccZK_FbasxG5xJ9O0mtPuIVavRO8Or89er61NiJIctiUWV0YqtMMOqK214VSjs8-lAx_7LmkneNOrkP7NdXvGTK0fxHgRBiHL7Tm2weLM33LjyMEzY4ygL68Hx81iJK4D-YRmUa8NJhpEKs8q93jgjwJ3ZrgDSzn2pKI-y3c5VWrYf-H38_lWOIMf7uuTOzKUOqoQYZLN8bhFYVyB4bLUwfX0gDtTT38QsV6MILDBQZl6gHQrHt1C8Lpp9EZ0x-1Vl2r2HeKlXS60iuRKZdfSWZNbibE2y9GCfdbBzRUGa-G3GRkQstDu2UBtNOo6WHZ4GI=w600-h250-no"
                        }
                        var d = n.title.$t,
                            u = n.summary.$t.substr(0, 180),
                            h = '<a href="' + o + '"><img src="' + c + '" title="<a href=\'' + o + "'><h3>" + d + "</h3></a><p>" + u + '</p>"/></a>';
                        l.find("#slider").append(h)
                    }
                    $("#slider").nivoSlider({
                        effect: "random",
                        pauseTime: 5e3
                    })
                }
            })
        })