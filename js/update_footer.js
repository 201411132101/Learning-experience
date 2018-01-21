// 获取访问次数并修改
var Record = Bmob.Object.extend("Record");
var query = new Bmob.Query(Record);
query.first({
    success: function(object) {
        // 查询成功
        object.set("total_times", object.get("total_times")+1);
        object.save();
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
});

