---
title: 作品集（Portfolios）
url: /user-guide/portfolios/
---

*作品集（Portfolios）是 [企業版](https://redirect.sonarsource.com/editions/enterprise.html) 和 [以下版本](https://www.sonarsource.com/plans-and-pricing/) 的一部分。*

### 作品集首頁

作品集首頁是一個可以讓經理和技術領導者監督他們專案可發布性的中心。可發佈性是基於品質門檻（quality gate）：通過是可以發佈的，失敗則不行，每個作品集（Portfolios）首頁都有提供作品集（Portfolios）中所有專案可發佈性的匯總視圖。

在這頁的頂在這頁的頂部，你可以輕鬆的查看整個作品集（Portfolios）目前是否為可發佈的，以及是否有任何作品集（Portfolios）的專案是未通過品質門檻（quality gate）的。可靠性、安全漏洞、安全審查和可維護性等級顯示出了作品集（Portfolios）在這三個領域中整體的運行狀況，以及每個領域中表現最差的專案的指標。

對於每個領域，你會看到：

評級（rating）（有關如何計算的詳細信息，請參閱“指標定義”）
* 評級（rating）（想知道更多如何計算的信息，請參閱 [指標定義（Metric Definitions）](/user-guide/metric-definitions/)）
* 評級最後一次更改時的指標
* 該領域中表現最差的專案指標

### 可發佈等級

可發佈等級是作品集（Portfolios）中得到**通過（Passed）**品質門檻（quality gate）的專案的比例：

**A**: > 80%  
**B**: > 60%  
**C**: > 40%  
**D**: > 20%  
**E**: <= 20%  

### 可靠性、安全漏洞、安全審查和可維護性等級

作品集（Portfolios）中的可靠性、安全漏洞、安全審查和可維護性等級是根據該作品集（Portfolios）中所有專案的平均等級計算的。

SonarQube將每個項目的字母評級轉換為數字（請參見下方的轉換表），計算作品集（Portfolios）中的平均專案數量，然後將該平均值轉為字母，平均值以四捨五入為基準，所以平均值如果為 2.5 將四捨五入為 3 ，得出C等級。

這樣就可以在你的作品集（Portfolios）上提供可靠性、安全漏洞、安全審查和可維護性的四軸上提供「問題密度（problem density）」度量。

評級轉換：

**E**: 5  
**D**: 4  
**C**: 3  
**B**: 2  
**A**: 1  

*注意：作品集（Portfolios）首頁也同樣可以用在子作品集（Sub-Portfolio）上*

### 作品集（Portfolios）PDF報告

在作品集（Portfolios）首頁上方，你可以藉由右上角的「作品集（Portfolios） PDF 報告（Portfolio PDF Report）」的下拉式選單中選擇**下載成 PDF 檔（Download as PDF）**來下載作品（）集的 PDF 概述。例如，如果你要參加一場可能無法使用 SonarQube 的會議，這就非常便利。

你可以藉由「作品集（Portfolios） PDF 報告（Portfolio PDF Report）」的下拉式選單中選擇**訂閱**來訂閱，即可通過電子郵件來接收 PDF。你可以透過作品集（Portfolios）和全局設定來設定報告頻率要為**每天**、**每周**或是**每月**。默認的頻率為每月一次。

**注意：** 僅在計算完作品集（Portfolios）後，你才會收到 PDF。

在作品集（Portfolios）全局管理設定中可以創建和編輯作品集（Portfolios）：**管理（Administration） > 配置（Configuration） > 作品集（Portfolios）（Portfolios）**。想看更多資訊，請至[作品集（Portfolios）配置和應用程式（Configuring Portfolios and Applications）](/project-administration/configuring-portfolios-and-applications/)。