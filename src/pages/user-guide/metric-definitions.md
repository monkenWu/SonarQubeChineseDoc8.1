---
title: 各項標準的定義
url: /user-guide/metric-definitions/
---

   
## 複雜度(Complexity)
**複雜度** (`complexity`)  
它根據程式碼中路徑數量而計算出的循環複雜度。每當函數的控制流程分裂時，複雜度就會增加1。每個方法的最小複雜度為1。由於關鍵字和功能的不同，這種計算會因為不同的程式語言而略有不同。

[[collapse]]
| ## 特定語言的詳細訊息
| 語言 | 筆錄
| ---|---
| ABAP | 使用以下關鍵字將複雜度加1: `AND`, `CATCH`, `CONTINUE`, `DO`, `ELSEIF`, `IF`, `LOOP`, `LOOPAT`, `OR`, `PROVIDE`, `SELECT…ENDSELECT`, `TRY`, `WHEN`, `WHILE`
| C/C++/Objective-C | 複雜度加1: function definitions, `while`, `do while`, `for`, `throw` statements, `switch`, `case`, `default`, `&&` operator, `||` operator, `?` ternary operator, `catch`, `break`, `continue`, `goto`.
| COBOL | 下列命令使複雜度增加一倍（在剪貼簿中使用時除外）: `ALSO`, `ALTER`, `AND`, `DEPENDING`, `END_OF_PAGE`, `ENTRY`, `EOP`, `EXCEPTION`, `EXIT`, `GOBACK`, `CONTINUE`, `IF`, `INVALID`, `OR`, `OVERFLOW`, `SIZE`, `STOP`, `TIMES`, `UNTIL`, `USE`, `VARYING`, `WHEN`, `EXEC CICS HANDLE`, `EXEC CICS LINK`, `EXEC CICS XCTL`, `EXEC CICS RETURN`
| Java | 關鍵字增加複雜度: `if`, `for`, `while`, `case`, `catch`, `throw`, `&&`, `||`, `?`
| JavaScript, PHP | 複雜度每增加一: function (即非抽象和非匿名的建構子、函數、過程或方法), `if`, short-circuit (AKA lazy) logical conjunction (`&&`), short-circuit (AKA lazy) logical disjunction (`||`), ternary conditional expressions, loop, `case` clause of a `switch` statement, `throw` and `catch` statement, `go to` statement (only for PHP)
| PL/I | 以下關鍵字將複雜度加一: `PROC`, `PROCEDURE`, `GOTO`, `GO TO`, `DO`, `IF`, `WHEN`, `|`, `!`, `|=`, `!=`, `&`, `&=`
| PL/SQL | 複雜度加一: the main PL/SQL anonymous block (not inner ones), create procedure, create trigger, procedure_definition, basic loop statement, when_clause_statement (the “when” of simple_case_statement and searched_case_statement), continue_statement, cursor_for_loop_statement, continue_exit_when_clause (The “WHEN” part of the continue and exit statements), exception_handler (every individual “WHEN”), exit_statement, for_loop_statement, forall_statement, if_statement, elsif_clause, raise_statement, return_statement, while_loop_statement, and_expression (“and” reserved word used within PL/SQL expressions), or_expression (“or” reserved word used within PL/SQL expressions), when_clause_expression (the “when” of simple_case_expression and searched_case_expression)
| VB.NET | 複雜度加一: 方法或建構子聲明(Sub, Function), `AndAlso`, `Case`, `Continue`, `End`, `Error`, `Exit`, `If`, `Loop`, `On Error`, `GoTo`, `OrElse`, `Resume`, `Stop`, `Throw`, `Try`.

**認知複雜度** (`cognitive_complexity`)  
了解程式碼的控制流程有多麼困難。有關用於計算此標準的數學模型的完整說明，請參見[認知複雜性白皮書](https://www.sonarsource.com/resources/white-papers/cognitive-complexity.html)。

---
## 重複性(Duplications)
**重複的區域** (`duplicated_blocks`)  
重複區域的行數。

[[collapse]]
| ## 特定語言的詳細訊息
| 對於被視為重複區域的程式碼:
|
| 非Java專案:  
| * 至少有100個連續且重複的token
| * 這些token至少應分散在:
| * 30行的COBOL程式碼內
| * 20行的ABAP程式碼內
| * 10行的其他語言程式碼內
|
|Java專案:  
| 無論token和行的數量如何，應至少有10個連續且重複的statement。在檢測重複性時，縮排和字串的差異可被忽略。
 
**重複的文件** (`duplicated_files`)  
重複涉及到的文件數。

**重複的行數** (`duplicated_lines`)  
重複涉及到的行數。

**重複的行數 (%)** (`duplicated_lines_density`)  
= `duplicated_lines` / `lines` * 100

---
## 問題(Issues)
**新問題** (`new_violations`)  
新程式內首次提出的問題數量。

**新的xxx問題** (`new_xxx_violations`)  
新程式內首次提出的xxx問題數量，其中xxx是以下項之一: `blocker`, `critical`, `major`, `minor`, `info`。

**問題** (`violations`)  
所有問題的總數。

**xxx的問題** (`xxx_violations`)  
xxx的問題總數，其中xxx是以下項之一: `blocker`, `critical`, `major`, `minor`, `info`。

**誤報問題** (`false_positive_issues`)  
標記為誤報的問題總數。

**開放式問題** (`open_issues`)  
處於「開放」狀態的問題總數。

**已確認的問題** (`confirmed_issues`)  
處於「已確認」狀態的問題總數。

**重新開放的問題** (`reopened_issues`)  
處於「重新開放」狀態的問題總數。

---
## 可維護性(Maintainability)
**程式碼異味** (`code_smells`)   
有程式碼異味問題總數。

**新的程式碼異味** (`new_code_smells`)  
首次提出的程式碼異味問題總數。

**可維護性等級** (`sqale_rating`)  
(前SQALE評級)
給專案的評級與技術債務比率(Technical Debt Ratio)有關。默認的「可維護性等級」標準為:

A=0-0.05, B=0.06-0.1, C=0.11-0.20, D=0.21-0.5, E=0.51-1

可維護性等級量表可以通過以下方式替代性表示:

* 若未解決的補救成本小於5％(包含)進入應用程式的時間則評為A級
* 若未解決的補救成本介於6％到10％進入應用程式的時間則評為B級
* 若未解決的補救成本介於11％到20％進入應用程式的時間則評為C級
* 若未解決的補救成本介於21％到50％進入應用程式的時間則評為D級
* 若未解決的補救成本超過50%以上(不含)進入應用程式的時間則評為E級

**技術債務** (`sqale_index`)  
努力修復所有程式碼異味。該標準以分鐘為單位存儲在資料庫中。以天為單位顯示值時，假設一天為8小時。

**新程式的技術債務** (`new_technical_debt`)  
努力修復在新程式內首次提出的所有程式怪味道。

**技術債務比率** (`sqale_debt_ratio`)  
開發軟體的成本與修復軟體的成本之間的比率。此技術債務比率公式為:  
	`Remediation cost / Development cost`  
可以重述為:  
	`Remediation cost / (Cost to develop 1 line of code * Number of lines of code)`  
開發一行程式碼的成本值為0.06天。

**新程式碼的技術債務比率** (`new_sqale_debt_ratio`)  
在新程式內更改程式碼的開發成本和與其相關的問題之成本間的比率。

---
## 質量門(Quality Gates)
**質量門狀態** (`alert_status`)  
與您的專案關聯的質量門狀態。可能的值為: `ERROR`, `OK`
(自7.6起已刪除WARN值)

**質量門詳細訊息** (`quality_gate_details`)  
對於質量門的所有條件，您都知道哪個條件失敗了，哪個不是。

---
## 可靠性(Reliability)
**Bugs** (`bugs`)  
Bugs的問題數量。

**新的漏洞** (`new_bugs`)  
新的漏洞的問題數量。

**可靠性度等級** (`reliability_rating`)  
A = 0個Bugs  
B = 至少1個次要的Bugs
C = 至少1個主要的Bugs  
D = 至少1個嚴重的Bugs  
E = 至少1個阻止程式運行的Bugs

**可靠性補救措施** (`reliability_remediation_effort`)  
努力解決所有Bug的問題。該標準以分鐘存儲在資料庫中。以天為單位顯示值時，假設一天為8小時。

**新程式碼的可靠性補救工作** (`new_reliability_remediation_effort`)  
與可靠性補救措施相同，但在新程式內更改程式碼。

---
## 安全性(Security)
**漏洞** (`vulnerabilities`)  
有漏洞的問題之數量。

**新漏洞** (`new_vulnerabilities`)  
新的有漏洞的問題之數量。

**安全等級** (`security_rating`)  
A = 0個漏洞
B = 至少1個次要的漏洞
C = 至少1個重大的漏洞
D = 至少1個嚴重的漏洞
E = 至少1個阻止程式運行的漏洞

**安全補救措施** (`security_remediation_effort`)  
努力解決所有有漏洞的問題。該項標準以分鐘存儲在資料庫中。以天為單位顯示值時，假設一天為8小時。

**對新程式碼的安全補救措施** (`new_security_remediation_effort`)  
與安全補救措施相同，但在新程式內更改程式碼。

**安全熱點** (`security_hotspots`)
安全熱點數量

**新的安全熱點** (`new_security_hotspots`)
新的安全熱點數量

**安全審查等級** (`security_review_rating`)

每1000行程式碼處於「正在審閱」狀態的安全熱點數的比率。

A = 0–3 每1000行程式碼「審核」和「審核中」安全熱點  	
B = >3–10  	
C = >10–15  	
D = >15–25  	
E = >25  

---
## 大小(Size)
**類別** (`classes`)  
類別的數量 (包含隱藏類別、物件、列舉和註解)。

**註解行數** (`comment_lines`)  
含註解或註解掉的程式碼的行數。

不重要的註解行（空註解行，僅包含特殊字符的註解行等）不會增加註釋行數。

以下程式碼包含9行註釋行：
```
/**                                    +0 => 空註解行
 *                                     +0 => 空註解行
 * This is my documentation            +1 => 重要註解行
 * although I don't                    +1 => 重要註解行
 * have much                           +1 => 重要註解行
 * to say                              +1 => 重要註解行
 *                                     +0 => 空註解行
 ***************************           +0 => 非重要註解行
 *                                     +0 => 空註解行
 * blabla...                           +1 => 重要註解行
 */                                    +0 => 空註解行
  
/**                                    +0 => 空註解行
 * public String foo() {               +1 => 註解掉的程式碼
 *   System.out.println(message);      +1 => 註解掉的程式碼
 *   return message;                   +1 => 註解掉的程式碼
 * }                                   +1 => 註解掉的程式碼
 */                                    +0 => 空註解行
 ```
[[collapse]]
| ## 特定語言的詳細訊息
| 語言 | 筆錄
| ---|---
| COBOL | 包含以下說明的行被視為註解和程式碼行： `AUTHOR`, `INSTALLATION`, `DATE-COMPILED`, `DATE-WRITTEN`, `SECURITY`.
| Java | 文件標頭不算作註解行（因為它們通常定義許可證）。

**註解 (%)** (`comment_lines_density`)  
註解行的密度 = 註解行數 / (程式碼的行數 + 註解行數) * 100

使用以下的公式：
* 50％表示程式碼行數等於註解行數
* 100％表示文件僅包含註解

**目錄** (`directories`)  
目錄數。

**文件** (`files`)  
文件數。

**行數** (`lines`)  
物理行數（enter鍵數量）。

**程式碼行數** (`ncloc`)  
包含至少一個字元的物理行數，該字元既不是空格，也不是列表或註解的一部分。
[[collapse]]
| ## 特定語言的詳細訊息
| 語言 | 筆錄
| --- | ---
| COBOL | 生成的程式碼和預處理指令（SKIP1，SKIP2，SKIP3，COPY，EJECT，REPLACE）不計為程式碼行數。

**每種語言的程式碼行數** (`ncloc_language_distribution`)  
按語言分佈的程式碼的非註解行數。

**函式** (`functions`)  
函式的數量。根據語言的不同，函式可以是函數、方法或段落。

[[collapse]]
| ## 特定語言的詳細訊息
| 語言 | 筆錄
| ---|---
| COBOL | 為段落的數量。
| Java | anonymous classes中的方法將被忽略。
| VB.NET | Accesors不被視為方法。

**專案** (`projects`)  
一個作品集的專案數量。

**Statements** (`statements`)  
statement的數量。

---
## 測試(Tests)
**條件覆蓋率** (`branch_coverage`)  
在包含一些布林表達式的每一行程式碼中，條件覆蓋率僅回答以下問題：「每個布林表達式都被評估為true和false嗎？」。這是在單元測試執行期間遵循的流量控制結構中可能條件的密度。

`條件覆蓋率 = (CT + CF) / (2*B)`   

* CT = 至少被評估一次為「true」的條件
* CF = 至少被評估一次為「false」的條件
* B = 條件總數

**新程式碼的條件覆蓋** (`new_branch_coverage`)  
條件覆蓋範圍相同，但僅限於新的/更新過的原始碼。

**條件覆蓋命中率** (`branch_coverage_hits_data`)  
覆蓋條件清單。

**條件行數** (`conditions_by_line`)  
條件的行數。

**條件覆蓋行數** (`covered_conditions_by_line`)  
條件覆蓋的行數。

**覆蓋範圍** (`coverage`)  
它是線路覆蓋和條件覆蓋的混合。它的目標是為以下問題提供更準確的答案：「單元測試已覆蓋了多少原始碼？」。

`覆蓋範圍 = (CT + CF + LC)/(2*B + EL)`  
  
* CT = 至少被評估一次為「true」的條件
* CF = 至少被評估一次為「false」的條件
* LC = 覆蓋行數 = lines_to_cover - uncovered_lines
* B = 條件總數
* EL = 可執行的行數(`lines_to_cover`)

**新程式碼的覆蓋範圍** (`new_coverage`)  
與覆蓋範圍相同，但僅限於新的或更新過的原始碼。

**Line coverage** (`line_coverage`)  
在給定的程式碼中，Line coverage僅回答以下問題：「在執行單元測試期間是否已執行了此程式碼行？」。它是單元測試中被覆蓋的行數之密度：

`Line coverage = LC / EL`  

* LC = 被覆蓋的行數(`lines_to_cover` - `uncovered_lines`)
* EL = 可執行的總行數(`lines_to_cover`)

**新程式碼的Line coverage** (`new_line_coverage`)  
與Line coverage相同，但僅限於新的或更新過的原始碼。

**Line coverage比率** (`coverage_line_hits_data`)  
被覆蓋的行數之列表。

**Lines to cover** (`lines_to_cover`)  
單元測試中可以覆蓋的程式碼行數（空行或完整的註解行不能被視為Lines to cover）。

**新程式碼的Lines to cover** (`new_lines_to_cover`)  
與Lines to cover相同，但僅限於新的或更新過的原始碼的行。

**跳過的單元測試數** (`skipped_tests`)  
跳過的單元測試的數量。

**未覆蓋條件數** (`uncovered_conditions`)  
單元測試中未覆蓋的條件數。

**新程式碼未覆蓋條件數** (`new_uncovered_conditions`)  
與未覆蓋條件數相同，但僅限於新的或更新過的原始碼。

**未覆蓋行數** (`uncovered_lines`)  
單元測試中未覆蓋的程式碼行數。

**新程式碼未覆蓋行數** (`new_uncovered_lines`)  
與未覆蓋行數相同，但僅限於新的或更新過的原始碼。

**單元測試** (`tests`)  
單元測試數。

**單元測試時間** (`test_execution_time`)  
執行所有單元測試所需的時間。

**單元測試錯誤** (`test_errors`)  
失敗的單元測試數。

**單元測試失敗** (`test_failures`)  
因意外異常而失敗的單元測試數。

**單元測試成功密度(%)** (`test_success_density`)  
`測試成功密度 = (單元測試 - (單元測試錯誤 + 單元測試失敗)) / 單元測試 * 100`
