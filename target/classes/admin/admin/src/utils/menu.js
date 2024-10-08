const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"粮仓保管员管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"粮仓保管员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"水稻种型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLiangcang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"出入库类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLiangcangChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"水稻种类管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryRenwu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除",
                            "报表"
                        ],
                        "menu":"粮仓管理",
                        "menuJump":"列表",
                        "tableName":"liangcang"
                    }
                ],
                "menu":"粮仓管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "出入库",
                            "删除",
                            "报表"
                        ],
                        "menu":"出入库管理",
                        "menuJump":"列表",
                        "tableName":"liangcangChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"出入库详情管理",
                        "menuJump":"列表",
                        "tableName":"liangcangChuruInoutList"
                    }
                ],
                "menu":"出入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"出受粮任务管理",
                        "menuJump":"列表",
                        "tableName":"renwu"
                    }
                ],
                "menu":"出受粮任务管理"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                   {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "修改",
                                ],
                                "menu":"粮仓管理",
                                "menuJump":"列表",
                                "tableName":"liangcang"
                            }
                        ],
                        "menu":"粮仓管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "出入库",
                                    "删除",
                                    "报表"
                                ],
                                "menu":"出入库管理",
                                "menuJump":"列表",
                                "tableName":"liangcangChuruInout"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "删除"
                                ],
                                "menu":"出入库详情管理",
                                "menuJump":"列表",
                                "tableName":"liangcangChuruInoutList"
                            }
                        ],
                        "menu":"出入库管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"出受粮任务管理",
                                "menuJump":"列表",
                                "tableName":"renwu"
                            }
                        ],
                        "menu":"出受粮任务管理"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"粮仓保管员管理",
                "tableName":"yonghu"
            }
]
    }
}
export default menu;
