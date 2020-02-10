---
title: 規則
url: /user-guide/rules/
---
## 簡介
在｛實例｝中，分析器提供了在程式碼執行上的規則來產生問題。其規則有四種： 
* 程式碼異味（可維護性 域）
* 錯誤（可靠性 域）
* 漏洞（安全 域）
* 安全疑慮熱點（安全 域）

對於程式碼異味與錯誤，我們期望的是零錯誤回報，至少這是我們的目標，這樣一來開發人員就不用懷疑是否需要修復。 

對於漏洞，目標是要上80%以上的議題為正確回報。 

安全性熱點規則吸引安全性敏感的程式碼的注意，在開發人員審查之後，預計超過80%的問題會被迅速的解決為「已審查」。

規則頁面是可以發現所有 已存在的規則 或 基於所提供的模板創建新規則 的入口 

## 規則

在預設條件下，當你進入菜單頂端的「規則」項目時，您將看到由 <!-- sonarqube --> 安裝在｛實例｝上的 <!-- /sonarqube --> 分析器帶來的 <!-- sonarcloud --> SonarCloud 上所有可用的 <!-- /sonarcloud -->。 您可以基於左側的選項面板縮小搜尋的準則： 
* **語言**: 規則所適用的語言。
* **種類**: 錯誤、漏洞、程式碼異味或安全疑慮熱點規則。 
* **標記**: 為了分類與幫助您可以更容易地發現，為規則增加標籤是可行的。 
* **儲存庫**: 提供規則給｛實例｝的引擎／分析器。
* **預設嚴重程度**: 規則的嚴重原始程度  --- 與提供此規則的分析器所規定的一致。
* **狀態**: 規則可以三種不同的狀態：
  * **測試**: 該規則近期才被實施，並且我們尚未從使用者得到足夠的回饋，因此可能會存在一些錯誤的正確回報與錯誤的錯誤回報。 
  * **Deprecated**: The rule should no longer be used because a similar, but more powerful and accurate rule exists.
  * **Ready**: The rule is ready to be used in production.
* **Available Since**: date when a rule was first added on {instance}. This is useful to list all the new rules since the last upgrade of a plugin for instance.
* **Template**: display rule templates that allow to create custom rules (see later on this page).
* **Quality Profile**: inclusion in or exclusion from a specific profile

If a quality profile is selected, it is also possible to check for its active severity and whether it is inherited or not. See the Quality Profile documentation for more.

## Rule Details

To see the details of a rule, either click on it, or use the right arrow key. Along with basic rule data, you'll also be able to see which, if any, profiles it's active in and how many open issues have been raised with it.

The following actions are available only if you have the right permissions ("Administer Quality Profiles and Gates"):

* **Add/Remove Tags**:
  * It is possible to add existing tags on a rule, or to create new ones (just enter a new name while typing in the text field).
  * Note that some rules have built-in tags that you cannot remove - they are provided by the plugins which contribute the rules.
* **Extend Description**:
  * You can extend rule descriptions to let users know how your organization is using a particular rule or to give more insight on a rule.
  * Note that the extension will be available to non-admin users as a normal part of the rule details.

<!-- sonarqube -->
## Rule Templates and Custom Rules

Rule Templates are provided by plugins as a basis for users to define their own custom rules in {instance}. To find templates, select the **Show Templates Only** facet from the the "Template" dropdown:

![Rule templates.](/images/rule-templates.png)

To create a custom rule from a template click the **Create** button next to the "Custom Rules" heading and fill in the following information:
* Name
* Key (auto-suggested)
* Description (Markdown format is supported)
* Default Severity
* Status
* The parameters specified by the template

You can navigate from a template to the details of custom rules defined from it by clicking the link in the "Custom Rules" section.

![Rule template details.](/images/rule-template-details.png)

### Custom Rules
Custom Rules are considered like any other rule, except that you can edit or delete them:

![Custom rules.](/images/rules-custom.png)

**Note:** When deleting a custom rule, it is not physically removed from the {instance} instance. Instead, its status is set to "REMOVED". This allows current or old issues related to this rule to be displayed properly in {instance} until they are fully removed.

## Extending Coding Rules

Custom coding rules can be added. See [Adding Coding Rules](/extend/adding-coding-rules/) for detailed information and tutorials.
<!-- /sonarqube -->

## Rule Types and Severities

### How are rules categorized?

The {instance} Quality Model divides rules into four categories: Bugs, Vulnerabilities, Security Hotspots, and Code Smells. Rules are assigned to categories based on the answers to these questions:

**Is the rule about code that is demonstrably wrong, or more likely wrong than not?**  
If the answer is "yes", then it's a Bug rule.  
If not...

**Is the rule about code that could be exploited by a hacker?**  
If so, then it's a Vulnerability rule.  
If not...

**Is the rule about code that is security-sensitive?**  
If so, then it's a Security Hotspot rule.  
If not...

**Is the rule neither a Bug nor a Vulnerability?**  
If so, then it's a Code Smell rule.

## How are severities assigned?
To assign severity to a rule, we ask a further series of questions. The first one is basically:

**What's the worst thing that could happen?**

In answering this question, we try to factor in Murphy's Law without predicting Armageddon.

Then we assess whether the impact and likelihood of the Worst Thing (see _How are severity and likelihood decided?_, below) are high or low, and plug the answers into a truth table:

|          | Impact                 | Likelihood             |
| -------- | ---------------------- | ---------------------- |
| Blocker  | ![](/images/check.svg) | ![](/images/check.svg) |
| Critical | ![](/images/check.svg) | ![](/images/cross.svg) |
| Major    | ![](/images/cross.svg) | ![](/images/check.svg) |
| Minor    | ![](/images/cross.svg) | ![](/images/cross.svg) |

## How are severity and likelihood decided?
To assess the severity of a rule, we start from the Worst Thing (see _How are severities assigned?_, above) and ask category-specific questions.

### Bugs
Impact: **Could the Worst Thing cause the application to crash or to corrupt stored data?**

Likelihood: **What's the probability that the Worst Thing will happen?**

### Vulnerabilities
Impact: **Could the exploitation of the Worst Thing result in significant damage to your assets or your users?**

Likelihood: **What is the probability that a hacker will be able to exploit the Worst Thing?**

### Security Hotspots
Security Hotspots are not assigned severities as it is unknown whether there is truly an underlying vulnerability until they are reviewed.
