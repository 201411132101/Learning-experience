// 加载课程名字为 name 的表中数据
function load_data(name) {
    var Data = Bmob.Object.extend("Data");
    var query = new Bmob.Query(Data);

    // 限制课程名字为 name
    query.equalTo("course", name);

    // 按老师名字升序排列
    query.ascending("teacher");

    // 按时间降序排列
    query.descending("time");

    // 查询所有数据
    var str = "";
    query.find({
        success: function(results) {
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i];

                str += "<tr>";
                str += "<td>" + object.get("course") + "</td>";
                str += "<td>" + object.get("teacher") + "</td>";
                str += "<td>" + object.get("type") + "</td>";
                str += "<td>" + object.get("time") + "</td>";
                str += "<td>" + object.get("suffix") + "</td>";
                str += "<td>" + object.get("upload") + "</td>";
                str += "<td><a href=\"" + object.get("link") + "\">下载</a></td>";
                str += "</tr>";
            }
            // 加载数据到表格
            $("#data tbody").html(str);
        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });
}

