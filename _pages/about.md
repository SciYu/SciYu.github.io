---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Fangchen Yu is currently a Ph.D. candidate in Computer and Information Engineering at The Chinese University of Hong Kong, Shenzhen (CUHK-SZ), under the supervision of [Prof. Wenye Li](https://sds.cuhk.edu.cn/teacher/317) and [Prof. Jianfeng Mao](https://sds.cuhk.edu.cn/teacher/268). He obtained his Bachelor's degree in Physics from the University of Chinese Academy of Sciences (UCAS) in 2020. His research interests are focused on statistical learning, machine learning, and metric learning.

# 🔥 Research Interests

- **Similarity Estimation for Incomplete Data**
  - How to estimate a high-quality similarity matrix for online incomplete data?
  - Are there any theoretical properties of similarity matrices for incomplete data?

- **Distance Estimation for Incomplete Data**
  - How to estimate a high-quality distance matrix for offline incomplete data?
  - How to accelerate solving the metric nearness problem?

- **Downstream Applications for Incomplete Data**
  - How to perform spectral clustering on incomplete data?
  - How to classify incomplete trees via Robinson-Foulds distance estimation?



# 📝 Publications 

* **Boosting Spectral Clustering on Incomplete Data via Kernel Correction and Affinity Learning**<br>
  **Fangchen Yu**, Runze Zhao, Zhan Shi, Yiwen Lu, Jicong Fan, Yicheng Zeng, Jianfeng Mao, Wenye Li<br>
  **NeurIPS-2023**: [[Paper](https://openreview.net/pdf?id=xFtuNq23D5)] [[Code](https://github.com/SciYu/Spectral-Clustering-on-Incomplete-Data)] [[PPT](https://neurips.cc/media/neurips-2023/Slides/70019.pdf)] [[bibtex](https://sciyu.github.io/bib/NIPS2023.bib)]
* **Online Estimation of Similarity Matrices with Incomplete Data**<br>
  **Fangchen Yu**, Yicheng Zeng, Jianfeng Mao, Wenye Li<br>
  **UAI-2023**: [[Paper](https://proceedings.mlr.press/v216/yu23a/yu23a.pdf)] [[Code](https://github.com/SciYu/Online-Similarity-Matrix-Correction)] [[Poster](https://github.com/SciYu/Online-Similarity-Matrix-Correction/blob/main/Fig/poster.png)] [[bibtex](https://sciyu.github.io/bib/UAI2023.bib)]
* **Highly-Efficient Robinson-Foulds Distance Estimation with Matrix Correction**<br>
  **Fangchen Yu**, Rui Bao, Jianfeng Mao, Wenye Li<br>
  **ECAI-2023**: [[Paper](https://ebooks.iospress.nl/doi/10.3233/FAIA230605)] [[Code](https://github.com/SciYu/Embedding-based-Matrix-Correction)] [[Poster](https://github.com/SciYu/Embedding-based-Matrix-Correction/blob/main/fig/ECAI_poster.png)] [[bibtex](https://sciyu.github.io/bib/ECAI2023.bib)]
* **From Incompleteness to Unity: A Framework for Multi-view Clustering with Missing Values**<br>
  **Fangchen Yu**, Zhan Shi, Yuqi Ma, Jianfeng Mao, Wenye Li<br>
  **ICONIP-2023 (Oral)**: [[Paper](https://link.springer.com/chapter/10.1007/978-981-99-8145-8_9)] [[bibtex](https://sciyu.github.io/bib/ICONIP2023.bib)]
* **DocReal: Robust Document Dewarping of Real-Life Images via Attention-Enhanced Control Point Prediction**<br>
  **Fangchen Yu** (internship), Yina Xie, Lei Wu, Yafei Wen, Guozhi Wang, Shuai Ren, Xiaoxin Chen, Jianfeng Mao, Wenye Li<br>
  **WACV-2024 (accepted)**<br>

* **Metric Nearness Made Practical**<br>
  Wenye Li, **Fangchen Yu**, Zichen Ma<br>
  **AAAI-2023**: [[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26041)] [[bibtex](https://sciyu.github.io/bib/AAAI2023.bib)]
* **Calibrating Distance Metrics Under Uncertainty**<br>
  Wenye Li, **Fangchen Yu**<br>
  **ECML-2022**: [[Paper](https://2022.ecmlpkdd.org/wp-content/uploads/2022/09/sub_673.pdf)] [[bibtex](https://sciyu.github.io/bib/ECML2022.bib)]
* **Learning Sparse Binary Code for Maximum Inner Product Search**<br>
  Changyi Ma, **Fangchen Yu**, Yueyao Yu, Wenye Li<br>
  **CIKM-2021**: [[Paper](https://dl.acm.org/doi/abs/10.1145/3459637.3482132)] [[bibtex](https://sciyu.github.io/bib/CIKM2021.bib)]

 

# 📖 Educations
- *Sep 2020 - Now*,<br>
 Ph.D. in Computer and Information Engineering, at The Chinese University of Hong Kong, Shenzhen (CUHK-SZ).<br>
- *Sep 2016 - Jun 2020*,<br> 
B.S. in Physics, at University of Chinese Academy of Sciences (UCAS). 



# 💻 Internships
- *Mar 2023 - Jul 2023*, Research internship at VIVO AI Lab, Shenzhen, China.



# 🎖 Honors and Awards
- *2020-2024*: Shenzhen Research Institute of Big Data (SRIBD) Excellence Scholarship 
- *Oct 2022*: Class I Outstanding TA Award at Chinese University of Hong Kong, Shenzhen (CUHK-SZ)
* *Jul 2021*: Class II Outstanding TA Award at Chinese University of Hong Kong, Shenzhen (CUHK-SZ)
* *Nov 2019*: Class III Scholarship at University of Chinese Academy of Sciences (UCAS)
* *Dec 2017*: Merit Student at University of Chinese Academy of Sciences (UCAS)


# 💬 Professional Service
- *Reviewer*:<br>
AAAI-2024, AAAI-2023, ICONIP-2023, ECML-2022
- *Program Committee Member*:<br>
AAAI-24 Student Program Program Committee<br>
AAAI-23 Student Program Program Committee<br>



# 📝 Teaching Assistant
- *Spring - Fall 2023*: DDA4210 Advanced Machine Learning 
- *Fall 2022*: MAT3300 Mathematical Modeling
- *Summer 2022*: EIE4006 Queuing Theory
- *Spring 2022*: STA3010 Regression Analysis
- *Fall 2021*: MAT4003 Number Theory
- *Spring 2021*: MAT4004 Graph Theory
- *Fall 2020*: MAT3280 Probability Theory