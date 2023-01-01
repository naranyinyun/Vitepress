# 刷入第三方 Recover
重启您的 8SE 至 Fastboot 模式，刷入 TWRP(推荐)

您可以使用其他方法，我们推荐使用 ADB，配置环境可以[参考](https://blog.nalanyinyun.ml/p/adb/)

连接手机 
::: warning
不要使用 USB3.0，可能会导致您的设备无法识别
:::

打开终端，输入

```shell
fastboot recovery [path/firename]

adb reboot recovery
```