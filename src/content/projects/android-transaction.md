---
title: Android Transaction App
poster: {
    src: https://ik.imagekit.io/moonwr/android.png?updatedAt=1745745827204&,
    alt: Android Transaction App Poster,
}
tags: ["Android", "Mobile", "Kotlin", "OOP"]
meta_description: An android app to manage and keep track of daily transaction. Addin Munawwar (Cadevue).
priority: 7.4
is_shown: true
---

Github Repository: <br>
https://github.com/cadevue/IF3210-2024-Android-SLP
<br>

# Description 👨‍💻
Bondoman is a transaction management application that allows users to add, edit, and delete transaction records.
Each transaction has attributes: title, price, date, category ("Income" or "Expense"), and location.

The location updates automatically when the app is opened, but users can manually change it when adding or editing a transaction. Users can also open the location directly in Google Maps.

The app supports scanning receipts through the camera or gallery. Scanned receipts generate dummy transaction data that is added to the transaction list.
A chart displays the proportion of transactions by category.

Users can:
- Export the transaction list as an XLS/XLSX file,
- Send the list via Gmail with the XLS/XLSX file attached,
- Generate random transactions for testing.

To use the app, users must log in with a designated account.
Sessions last for a maximum of 5 minutes before requiring re-login, managed with a JWT that expires after 5 minutes.

The app can detect internet connection status.
While it can open without an internet connection, server requests and data retrieval require online access.

# Libraries Used 📚
- Google ML Kit (Scan)
- Retrofit (API)
- KSP (Room)
- FusedLocationProviderClient (Get Current Location)
- Geocoder
- JSoup (Santizing Input)
- OtaliaStudios (Twibbon)
- Google Play Services Maps (Google Map Intent)
- Apache POI (XLS/XLSX)
- https://github.com/PhilJay/MPAndroidChart (Graf)
- Splash Screen API

# Contributors 🤝
1. &nbsp;Addin Munawwar Yusuf ([cadevue](https://github.com/cadevue))
2. &nbsp;M Farrel Danendra Rachim ([Breezy-DR](https://github.com/Breezy-DR))
3. &nbsp;Muhammad Equilibrie Fajria ([MuhLibri](https://github.com/MuhLibri))

# Screenshots 📸
<table>
<tr class="flex gap-2">
<td>

![Internet Lost Beginning App](../../assets/project/android-transaction/internet-loss-beginning-app.jpg)

</td>

<td>

![Login](../../assets/project/android-transaction/login.jpg)

</td>

<td>

![Transactions List](../../assets/project/android-transaction/transactions-list.jpg)

</td>

</tr>


<tr class="flex gap-2">
<td>

![Scan](../../assets/project/android-transaction/scan.jpg)

</td>
<td>

![Twibbon](../../assets/project/android-transaction/twibbon.jpg)

</td>
<td>

![Retake Twibbon](../../assets/project/android-transaction/retake-twibbon.jpg)

</td>
</tr>

<tr class="flex gap-2">
<td>

![Graph](../../assets/project/android-transaction/graph.jpg)

</td>
<td>

![Settings](../../assets/project/android-transaction/settings.jpg)

</td>
<td>

![Add Transaction](../../assets/project/android-transaction/add-transaction.jpg)

</td>
</tr>

<tr class="flex gap-2">
<td>

![Edit Transaction](../../assets/project/android-transaction/edit-transaction.jpg)

</td>
<td>

![Delete Transaction](../../assets/project/android-transaction/delete-transaction.jpg)

</td>
<td>

![Discard Changes](../../assets/project/android-transaction/discard-changes.jpg)

</td>
</tr>

<tr class="flex gap-2">
<td>

![Scan Photo](../../assets/project/android-transaction/scan-photo.jpg)

</td>
<td>

![Scanned Transaction Added](../../assets/project/android-transaction/scanned-transactions-added.jpg)

</td>
<td>

![Save Transaction Dialog](../../assets/project/android-transaction/save-transaction-dialog.jpg)

</td>
</tr>

<tr class="flex gap-2">
<td>

![Save Transaction Succeed](../../assets/project/android-transaction/save-transaction-succeed.jpg)

</td>
<td>

![Send Transaction Dialog](../../assets/project/android-transaction/send-transaction-dialog.jpg)

</td>
<td>

![Send Transaction Intent](../../assets/project/android-transaction/send-transactions-intent.jpg)

</td>
</tr>

<tr class="flex gap-2">
<td>

![Randomize Transaction](../../assets/project/android-transaction/randomize.jpg)

</td>
<td>

![Clear Transaction](../../assets/project/android-transaction/clear-transactions.jpg)

</td>
<td>

![Internet Lost Midst App](../../assets/project/android-transaction/internet-loss-midst-app.jpg)

</td>
</tr>