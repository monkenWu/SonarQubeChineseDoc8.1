---
title: 內建規則標籤
url: /user-guide/built-in-rule-tags/
---
標籤是對規則和問題進行分類的一種方法。問題規則地繼承了引發它們的標籤。有些標籤僅適用於特定語言，但更多的標籤卻是跨語言的。使用者可以加入標籤至規則與問題中，但多數的規則都已具有現成的標籤。以下是部份內建規則標籤含義的列表：

*注意：以下的連結 [rules.sonarsource.com](https://rules.sonarsource.com) 已針對 Java 語法進行篩選*

* [大腦超載（brain-overload）](https://rules.sonarsource.com/java/tag/brain-overload)：一時間有太多事情需要記住。
* [壞習慣（bad-practice）](https://rules.sonarsource.com/java/tag/bad-practice)：程式照著設計方向撰寫，但其設計方式實質上被廣泛認為是一個壞主意。
* [憑證（cert）](https://rules.sonarsource.com/java/tag/cert)：與 [憑證](https://www.securecoding.cert.org/confluence/x/BgE) 中的標準有關。目前有三種 CRET 標準： [C](https://www.securecoding.cert.org/confluence/x/HQE), [C++](https://www.securecoding.cert.org/confluence/x/fQI), and [Java](https://www.securecoding.cert.org/confluence/x/Ux)。 Many of these rules are not language-specific, but are good programming practices. That's why you'll see this tag on non-C/C++, Java rules.
* [clumsy](https://rules.sonarsource.com/java/tag/clumsy) - extra steps are used to accomplish something that could be done more clearly and concisely. (E.G. calling .toString() on a String).
* [confusing](https://rules.sonarsource.com/java/tag/confusing) - will take maintainers longer to understand than is really justified by what the code actually does
* [convention](https://rules.sonarsource.com/java/tag/convention) - coding convention - typically formatting, naming, whitespace...
* [cwe](https://rules.sonarsource.com/java/tag/cwe) - relates to a rule in the [Common Weakness Enumeration](http://cwe.mitre.org/). For more on CWE and on security-related rules in general, see [Security-related rules](/user-guide/security-rules/).
* [design](https://rules.sonarsource.com/java/tag/design) - there is something questionable about the design of the code
* [lock-in](https://rules.sonarsource.com/java/tag/lock-in) - environment-specific features are used
* [misra](https://rules.sonarsource.com/java/tag/misra) - relates to a rule in one of the [MISRA](http://www.misra.org.uk/) standards. While the MISRA rules are primarily about C and C++, many of them are not language-specific (E.G. don't use a float as a loop counter) but are simply good programming practices. That's why you'll see these tags on non-C/C++ rules.
* [owasp](https://rules.sonarsource.com/java/tag/owasp) - relates to a rule in the [OWASP Top Ten](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) security standards. Note, that the OWASP Top Ten is a list of high-level vulnerabilities which translates to many, many potential rules.
* [pitfall](https://rules.sonarsource.com/java/tag/pitfall) - nothing is wrong yet, but something could go wrong in the future; a trap has been set for the next guy and he'll probably fall into it and screw up the code.
* [sans-top25](https://rules.sonarsource.com/java/tag/sans-top25) - relates to the [SANS Top 25 Coding Errors](http://www.sans.org/top25-software-errors/), which are security-related. Note that  the SANS Top 25 list is pulled directly from the CWE.
* [suspicious](https://rules.sonarsource.com/java/tag/suspicious) - it's not guaranteed that this is a **bug**, but it looks suspiciously like one. At the very least, the code should be re-examined & likely refactored for clarity.
* [unpredictable](https://rules.sonarsource.com/java/tag/unpredictable) - the code may work fine under current conditions, but may fail erratically if conditions change.
* [unused](https://rules.sonarsource.com/java/tag/unused) - unused code, E.G. a private variable that is never used.
* [user-experience](https://rules.sonarsource.com/java/tag/user-experience) - there's nothing technically wrong with your code, but it may make some or all of your users hate you.
