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

Fangchen Yu is currently a Ph.D. candidate in Computer and Information Engineering at [The Chinese University of Hong Kong, Shenzhen](https://cuhk.edu.cn/en) (CUHK-SZ), under the supervision of [Prof. Wenye Li](https://sds.cuhk.edu.cn/teacher/317) and [Prof. Jianfeng Mao](https://sds.cuhk.edu.cn/teacher/268). He obtained his Bachelor's degree in Physics from the [University of Chinese Academy of Sciences](https://english.ucas.ac.cn/) (UCAS) in 2020. His research interests focus on statistical learning, machine learning, and metric learning.


# Research Interests

- **Efficient Optimization Algorithms for Incomplete Data (Previous Work)**
  - Optimization of similarity and distance matrices for offline/online incomplete data
  - Estimation of inner product matrix for incomplete data on similarity search tasks

- **Optimization and Generalization for Wasserstein Distance (Ongoing Work)**
  - Fast and accurate tree Wasserstein distance for approximating 1-Wassserstein distance
  - Robust Wasserstein distance for unbalanced distributions

- **Optimization for Visual Generative Models & Multi-modal LLM (Future Work)**
  - Optimization for Wasserstein-based generative models (e.g., Point Cloud Completion)
  - New neural network design for the discovery of physical laws (e.g., K-A Networks)



# Publications 

* **FedLF: Layer-wise Fair Federated Learning**<br>
  Zibin Pan, Chi Li, **<u>Fangchen Yu</u>**, Shuyi Wang, Haijin Wang, Xiaoying Tang, Junhua Zhao<br>
  ***<span style="color: #0033A0;">AAAI-2024</span>***: [[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/29368)] [[Code](https://github.com/SciYu/FedLF)] [[Poster](./poster/AAAI2024_poster.png)] [[bibtex](https://sciyu.github.io/bib/WACV2024.bib)]
* **DocReal: Robust Document Dewarping of Real-Life Images via Attention-Enhanced Control Point Prediction**<br>
  **<u>Fangchen Yu</u>** (internship), Yina Xie, Lei Wu, Yafei Wen, Guozhi Wang, Shuai Ren, Xiaoxin Chen, Jianfeng Mao, Wenye Li<br>
  ***<span style="color: #0033A0;">WACV-2024</span>***: [[Paper](https://openaccess.thecvf.com/content/WACV2024/papers/Yu_DocReal_Robust_Document_Dewarping_of_Real-Life_Images_via_Attention-Enhanced_Control_WACV_2024_paper.pdf)] [[Code](https://github.com/SciYu/DocReal)] [[Poster](./poster/WACV2024_poster.png)] [[bibtex](https://sciyu.github.io/bib/WACV2024.bib)]

* **Boosting Spectral Clustering on Incomplete Data via Kernel Correction and Affinity Learning**<br>
  **<u>Fangchen Yu</u>**, Runze Zhao, Zhan Shi, Yiwen Lu, Jicong Fan, Yicheng Zeng, Jianfeng Mao, Wenye Li<br>
  ***<span style="color: #0033A0;">NeurIPS-2023</span>***: [[Paper](https://openreview.net/pdf?id=xFtuNq23D5)] [[Code](https://github.com/SciYu/Spectral-Clustering-on-Incomplete-Data)] [[Video](https://neurips.cc/virtual/2023/poster/70019)] [[PPT](https://neurips.cc/media/neurips-2023/Slides/70019_iLAU9xR.pdf)] [[Poster](./poster/NeurIPS2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/NIPS2023.bib)]
* **Online Estimation of Similarity Matrices with Incomplete Data**<br>
  **<u>Fangchen Yu</u>**, Yicheng Zeng, Jianfeng Mao, Wenye Li<br>
  ***<span style="color: #0033A0;">UAI-2023</span>***: [[Paper](https://proceedings.mlr.press/v216/yu23a/yu23a.pdf)] [[Code](https://github.com/SciYu/Online-Similarity-Matrix-Correction)] [[Poster](./poster/UAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/UAI2023.bib)]
* **Highly-Efficient Robinson-Foulds Distance Estimation with Matrix Correction**<br>
  **<u>Fangchen Yu</u>**, Rui Bao, Jianfeng Mao, Wenye Li<br>
  ***<span style="color: #0033A0;">ECAI-2023</span>***: [[Paper](https://ebooks.iospress.nl/doi/10.3233/FAIA230605)] [[Code](https://github.com/SciYu/Embedding-based-Matrix-Correction)] [[Poster](./poster/ECAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/ECAI2023.bib)]
* **From Incompleteness to Unity: A Framework for Multi-view Clustering with Missing Values**<br>
  **<u>Fangchen Yu</u>**, Zhan Shi, Yuqi Ma, Jianfeng Mao, Wenye Li<br>
  ***<span style="color: #0033A0;">ICONIP-2023 (Oral)</span>***: [[Paper](https://link.springer.com/chapter/10.1007/978-981-99-8145-8_9)] [[bibtex](https://sciyu.github.io/bib/ICONIP2023.bib)]
* **Metric Nearness Made Practical**<br>
  Wenye Li, **<u>Fangchen Yu</u>**, Zichen Ma<br>
  ***<span style="color: #0033A0;">AAAI-2023</span>***: [[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26041)] [[Code](https://github.com/SciYu/Metric-Nearness-Made-Practical)] [[Poster](./poster/AAAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/AAAI2023.bib)]

* **Calibrating Distance Metrics Under Uncertainty**<br>
  Wenye Li, **<u>Fangchen Yu</u>**<br>
  ***<span style="color: #0033A0;">ECML-2022</span>***: [[Paper](https://link.springer.com/chapter/10.1007/978-3-031-26409-2_14)] [[bibtex](https://sciyu.github.io/bib/ECML2022.bib)]
  
* **Learning Sparse Binary Code for Maximum Inner Product Search**<br>
  Changyi Ma, **<u>Fangchen Yu</u>**, Yueyao Yu, Wenye Li<br>
  ***<span style="color: #0033A0;">CIKM-2021 (Best Short Paper Finalist)</span>***: [[Paper](https://dl.acm.org/doi/abs/10.1145/3459637.3482132)] [[bibtex](https://sciyu.github.io/bib/CIKM2021.bib)]

 

# Educations
- *Sep 2020 - Now*,<br>
 Ph.D. in Computer and Information Engineering, at The Chinese University of Hong Kong, Shenzhen (CUHK-SZ).<br>
- *Aug 2019 - Dec 2019*,<br> 
Global Study Program, at University of California, Davis (UCD).<br>
- *Sep 2016 - Jun 2020*,<br> 
B.S. in Physics, at University of Chinese Academy of Sciences (UCAS). 



# Internships
- *Mar 2023 - Jul 2023*, Research internship at VIVO AI Lab, Shenzhen, China.



# Honors and Awards
- *2020-2024*: **PhD Fellowship (Silver Class)** at Shenzhen Research Institute of Big Data (SRIBD)
- *Oct 2022*: **Class I Outstanding TA Award** at Chinese University of Hong Kong, Shenzhen (CUHK-SZ)
* *Jul 2021*: **Class II Outstanding TA Award** at Chinese University of Hong Kong, Shenzhen (CUHK-SZ)
* *Nov 2019*: **Class III Scholarship** at University of Chinese Academy of Sciences (UCAS)
* *Dec 2017*: **Merit Student** at University of Chinese Academy of Sciences (UCAS)



# Professional Service
- *Reviewer*:<br>
NeurIPS-2024, IJCAI-2024, AAAI-2024, AAAI-2023, ICONIP-2023, ECML-2022
- *Program Committee Member*:<br>
AAAI-24 Student Program Program Committee<br>
AAAI-23 Student Program Program Committee<br>



# Teaching Assistant
- *Spring - Fall 2023*: DDA4210 Advanced Machine Learning 
- *Fall 2022*: MAT3300 Mathematical Modeling
- *Summer 2022*: EIE4006 Queuing Theory
- *Spring 2022*: STA3010 Regression Analysis
- *Fall 2021*: MAT4003 Number Theory
- *Spring 2021*: MAT4004 Graph Theory
- *Fall 2020*: MAT3280 Probability Theory