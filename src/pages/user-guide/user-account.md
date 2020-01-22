---
title: 使用者帳戶
url: /user-guide/user-account/
---

作為 SonarQube 的使用者，您擁有自己的空間，在那裡可以看到跟自己相關的事物。

## 配置

<!-- sonarqube -->

它為你提供以下摘要:

- 你的群組
- 你的 SCM 帳戶

## 安全

如果你未使用 LDAP 或 OAuth 的第三方身份驗證機制（GitHub, Google 帳號, ...等），則你可以在這此處更改你的密碼。此外，你也可以管理你的身分驗證權杖（authentication token）

你可以根據你想要的數量創建權杖（Token）。當權杖（Token）生成後，你可以使用它對有[執行分析](/instance-administration/security/)權限的專案進行分析

<!-- /sonarqube -->

<!-- sonarcloud -->

It gives you a summary of your SCM accounts and allows you to delete your account.

## Security

You can create as many Tokens as you want. Once a Token is created, you can use it to perform analysis on a project where you have the [Execute Analysis]（/instance-administration/security/） permission.

## Organizations

This is an overview of all the organizations you are member of.

## Delete your user account

Go to [User > My Account > Profile]（/#sonarcloud#/account） and click on **Delete**. Once your account is deleted, all you data will be removed except your login that will still be displayed in different places:

- issues assignee
- issues comments
- issues changelog

Note that you can manually unassign yourself from all your issues and/or remove your comments before deleting your account.

The information used to identify yourself in SCM （name, email） are part of the SCM data and can not be removed.

<!-- /sonarcloud -->
