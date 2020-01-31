---
title: 安全報告
url: /user-guide/security-reports/
---

*安全報告是 [企業版](https://redirect.sonarsource.com/editions/enterprise.html)和 [以下版本](https://www.sonarsource.com/plans-and-pricing/)的一部分。*

## 安全報告可以顯示什麼？
安全報告可快速為您提供應用程序安全性的概覽，其中包括 [OWASP 的 Top 10](https://www.owasp.org/index.php/Top_10-2017_Top_10)，[SANS 的 Top 25](https://www.sans.org/top25-software-errors) 類別以及 [CWE](http://cwe.mitre.org/)-特定細節的詳細信息。

安全報告由分析儀（analyzers）產生，而分析儀（analyzers）仰賴於品質配置文件（quality profiles）中啟動的規則來引發安全問題（security issues）。如果在品質配置文件（quality profiles）中啟動的規則沒有相對應於 OWASP 的類別，則不會出現與該特定類相同關的問題（issues），並且顯示的等級為 A，這並不意味著您對該類別是安全的，只是您可能需要激活更多規則（假設還存在一些其他的規則）。

## 安全熱點（Security Hotspot）和漏洞（Vulnerability）有什麼區別？
漏洞（Vulnerability）是程式碼中容易受到攻擊的點，安全熱點（Security Hotspot）顯示出了有安全疑慮的程式碼區段，需要對其進行手動檢查來確保敏感的程式碼區段以最安全的方式使用。安全熱點（Security Hotspot）還有助於對開發人員進行安全性訓練。

更多相關的詳細信息，[安全熱點（Security Hotspots）](/user-guide/security-hotspots/)。

## 為什麼安全熱點（Security Hotspot）和漏洞（Vulnerability）很相似？
他們是刻意要相似的，安全熱點（Security Hotspot）規則應該包括漏洞（Vulnerability）規則的所有匹配項，和污點分析引擎無法檢測到漏洞（Vulnerability）的情況。例如，從一種語言切換為另一種語言（XML, JNI...等），使用某些第三方庫（library）將會阻止污點分析發現漏洞。漏洞（Vulnerability）規則只有在高度信任的情況下才會突出顯示安全威脅，這意味著它始終會忽略其中的一些威脅。而安全熱點（Security Hotspot）規則藉由顯示那些可能有問題潛伏的程式碼（即使它無法檢測到任何漏洞）來引導安全程式碼審查。

## 為什麼我看不到任何安全熱點（Security Hotspot）和漏洞（Vulnerability）？
由於以下原因，您可能看不到任何漏洞或安全熱點：
* 您看不到任何東西，因為程式碼是在不使用任何有安全疑慮的API的情況下編寫的。
* 漏洞（Vulnerability）或安全熱點（Security Hotspot）規則可使用，但未在品質配置文件（quality profiles）中啟動，因此不會引發漏洞（Vulnerability）或安全熱點（Security Hotspot）。
* 您所用語言的分析器目前可能僅提供一些規則，而不會引發任何漏洞（Vulnerability）或僅出現少量漏洞（Vulnerability）或安全熱點（Security Hotspot）。
