# 扩容 System
进入 Recovery，使用 MTP 将解压后的"MI8SE_5GB_System.zip"传输到设备中  
选择刷入，选择"MI8SE_5GB_System.zip",点击刷入并滑动确认  
在清除中双清和格式化 DATA(不确定是否支持 Dirty Flash，推荐格式化)  
::: warning
在扩容后您的 128GB 闪存设备会识别为 64GB，这可能是 Android 只识别二进制数的原因  
:::

::: danger
在此步操作中，你修改了 System 和 Data 分区的大小，如果 AVB 未关闭，您将无法启动设备  
关闭 AVB 使用 准备 章节下载的关闭 AVB 工具即可
:::