---
title: 內建規則標籤
url: /user-guide/built-in-rule-tags/
---
標籤是對規則和問題進行分類的一種方法。問題規則地繼承了引發它們的標籤。有些標籤僅適用於特定語言，但更多的標籤卻是跨語言的。使用者可以加入標籤至規則與問題中，但多數的規則都已具有現成的標籤。以下是部份內建規則標籤含義的列表：

*注意：以下的連結 [rules.sonarsource.com](https://rules.sonarsource.com) 已針對 Java 語法進行篩選*

* [大腦超載（brain-overload）](https://rules.sonarsource.com/java/tag/brain-overload)：一時間有太多事情需要記住。
* [壞習慣（bad-practice）](https://rules.sonarsource.com/java/tag/bad-practice)：程式照著設計方向撰寫，但其設計方式實質上被廣泛認為是一個壞主意。
* [憑證（cert）](https://rules.sonarsource.com/java/tag/cert)：與 [憑證](https://www.securecoding.cert.org/confluence/x/BgE) 中的標準有關。目前有三種 CRET 標準：[C](https://www.securecoding.cert.org/confluence/x/HQE)、[C++](https://www.securecoding.cert.org/confluence/x/fQI) 和 [Java](https://www.securecoding.cert.org/confluence/x/Ux)。其中許多規則並不只限定於特定語言，而是良好的程式撰寫習慣。這就是為什麼您會在非 C、C++ 或 Java 的規則上看到這些標籤的原因。
* [笨拙（clumsy）](https://rules.sonarsource.com/java/tag/clumsy)：可以更清楚、簡潔地完成某件事，卻使用額外的步驟完成。（例如：對字串使用 .toString() 語法）。
* [模糊（confusing）](https://rules.sonarsource.com/java/tag/confusing)：將使程式維護人員花費較多的時間在理解程式碼，而不是由程式的實際作用來證明其合理性。
* [慣例（convention)](https://rules.sonarsource.com/java/tag/convention)：程式碼慣例（coding convention）；通常格式化（typically formatting）；命名（naming）；空白字元（whitespace）等。
* [通用缺陷列表 CWE](https://rules.sonarsource.com/java/tag/cwe)：與 [通用缺陷列表（Common Weakness Enumeration）](http://cwe.mitre.org/) 中的規則相關。有關 CWE 和一般與安全相關的規則的更多信息，請參見 [安全相關規則（Security-related rules）](/user-guide/security-rules/)。
* [設計（design）](https://rules.sonarsource.com/java/tag/design)：與程式碼設計有關的問題。
* [鎖（lock-in）](https://rules.sonarsource.com/java/tag/lock-in)：使用於特定環境的功能。
* [misra](https://rules.sonarsource.com/java/tag/misra)：與 [MISRA](http://www.misra.org.uk/) 標準中之規則相關。儘管 MISRA 規則主要是與 C 和 C++ 相關，但其中許多的規則並不只適用於特定語言（例如：不以浮點數作為迴圈計數器（loop counter）使用，而是良好的程式撰寫習慣。這就是為什麼您會在非 C 或 C++ 的規則上看到這些標籤的原因。
* [開放式Web應用程式安全項目（owasp）](https://rules.sonarsource.com/java/tag/owasp)：與 [OWASP Top Ten](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) 中的安全標準規則有關。注意，OWASP Top Ten 是一系列高階漏洞的列表，它演變成許多潛在規則。
* [陷阱（pitfall）](https://rules.sonarsource.com/java/tag/pitfall)：當下沒有錯誤，但是未來可能會出問題；先前設下的陷阱可能會使將來落入圈套，並弄亂程式碼。
* [sans-top25](https://rules.sonarsource.com/java/tag/sans-top25)：與 [SANS 25 個最常見的軟體錯誤](http://www.sans.org/top25-software-errors/) 以及安全性相關。須注意的是，SANS TOP 25 的列表是直接取自 CWE。
* [可疑（suspicious）](https://rules.sonarsource.com/java/tag/suspicious)：無法保證這是一個**程式錯誤**，但看起來卻十分地可疑。至少應該對程式碼進行檢查，且為了清楚起見可以嘗試對其進行重構。
* [不可預測（unpredictable）](https://rules.sonarsource.com/java/tag/unpredictable)：程式碼在當前條件下可能會正常工作，但如果條件發生變化，則可能會失敗。
* [未使用（unused）](https://rules.sonarsource.com/java/tag/unused)：未用碼（unused code），例如：一個從未使用過的私有變數。
* [使用者體驗（user-experience）](https://rules.sonarsource.com/java/tag/user-experience)：在技術層面上，您的程式碼沒有錯誤，但這可能導致部份或全部的使用者對您感到厭惡。
