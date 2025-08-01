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

# 🧑‍🎓 About Me

I am a Ph.D. candidate in Computer and Information Engineering at [**The Chinese University of Hong Kong, Shenzhen**](https://cuhk.edu.cn/en) (CUHK-SZ), under the supervision of [**Prof. Wenye Li**](https://sds.cuhk.edu.cn/en/teacher/317) and [**Prof. Jianfeng Mao**](https://sds.cuhk.edu.cn/en/teacher/268). I obtained the Bachelor's degree in Physics from the [**University of Chinese Academy of Sciences**](https://english.ucas.ac.cn/) (UCAS) in 2020.


I have a broad interest in machine learning with a particular interest in *statistics for AI*, *optimization*, *optimal transport*, and *generative models*. **My CV can be found here in [Chinese](简历-余方晨-港中深.pdf) and [English](Resume_Fangchen_Yu_CUHKSZ.pdf)** (last updated: 2025-05-04).


# 🏷️ Research Interests

Statistics for AI, Optimization, Optimal Transport, Generative Model.

<span class='anchor' id='research-topics'></span>

# 📑 Research Topics

- **Efficient Similarity and Distance Learning for Incomplete Data (Previous Work)**
  - Optimize similarity matrices for offline and online incomplete data (Published in NeurIPS, WWW, and UAI)
  - Estimate distance matrices for incomplete data in similarity search tasks (Published in AAAI, ECAI, and ECML)

- **Optimization and Generalization of Wasserstein Distance (Ongoing Work)**
  - Develop an accurate tree-Wasserstein distance for approximating the 1-Wasserstein distance (Accepted in ICML)
  - Design a novel Wasserstein distance for unbalanced point clouds

- **Optimal Transport for Visual Generative Models (Future Work)**
  - Apply optimal transport to flow matching and diffusion models
  - Investigate optimal transport techniques for video generation and multi-modal learning

<span class='anchor' id='publications'></span>

# 📝 Publications & Preprint

**$\dagger$: Equal contributions; $\ast$: Corresponding authors**

- ![ICML 2025](https://img.shields.io/badge/ICML-2025-orange) [**UltraTWD: Optimizing Ultrametric Trees for Tree-Wasserstein Distance**]()<br>
  **<u>Fangchen Yu</u>**, Yanzhen Chen, Jiaxing Wei, Jianfeng Mao, Wenye Li<sup>$\ast$</sup>, Qiang Sun<sup>$\ast$</sup> <br>
  [[Paper](https://icml.cc/virtual/2025/poster/44185)] [[Code](https://github.com/SciYu/UltraTWD)] [[Poster](./poster/ICML2025_poster.png)] [[bibtex](https://sciyu.github.io/bib/ICML2025.bib)]

- ![WWW 2025](https://img.shields.io/badge/WWW-2025-orange) [**A Theory-Driven Approach to Inner Product Matrix Estimation for Incomplete Data: An Eigenvalue Perspective**](https://openreview.net/forum?id=MeD7Pq8FgM)<br>
  **<u>Fangchen Yu</u>**<sup>$\dagger \ast$</sup>, Yicheng Zeng<sup>$\dagger \ast$</sup>, Jianfeng Mao, Wenye Li <br>
  [[Paper](https://dl.acm.org/doi/pdf/10.1145/3696410.3714947?casa_token=vH66OZoybrkAAAAA:kzrl2y-PJA424rCUwkN7DpzVW7hBmYTwPTHMwYokouoO3laDOMjtPbL0AXGI5mseoy_JpknGYsN4nbs)] [[Code](https://github.com/SciYu/Inner-Product-Estimation)] [[Poster](./poster/WWW2025_poster.png)] [[bibtex](https://sciyu.github.io/bib/WWW2025.bib)]

- ![Information Sciences 2025](https://img.shields.io/badge/Information_Sciences-2025-orange) [**Balancing the Trade-Off Between Global and Personalized Performance in Federated Learning**](https://www.sciencedirect.com/science/article/pii/S0020025525002865)<br>
  Zibin Pan, Chi Li, **<u>Fangchen Yu</u>**, Shuyi Wang, Xiaoying Tang<sup>$\ast$</sup>, Junhua Zhao<sup>$\ast$</sup> <br>
  [[Paper](https://www.sciencedirect.com/science/article/pii/S0020025525002865)] [[bibtex](https://sciyu.github.io/bib/INS2025.bib)]

- ![arXiv 2024](https://img.shields.io/badge/arXiv-2024-orange) [**KAE: Kolmogorov-Arnold Auto-Encoder for Representation Learning**](https://arxiv.org/pdf/2501.00420)<br>
  **<u>Fangchen Yu</u>**, Ruilizhen Hu, Yidong Lin, Yuqi Ma, Zhenghao Huang, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://arxiv.org/pdf/2501.00420)] [[Code](https://github.com/SciYu/KAE)] [[bibtex](https://sciyu.github.io/bib/KAE.bib)]

- ![AAAI 2024](https://img.shields.io/badge/AAAI-2024-orange) [**FedLF: Layer-wise Fair Federated Learning**](https://ojs.aaai.org/index.php/AAAI/article/view/29368)<br>
  Zibin Pan, Chi Li, **<u>Fangchen Yu</u>**, Shuyi Wang, Haijin Wang, Xiaoying Tang<sup>$\ast$</sup>, Junhua Zhao<sup>$\ast$</sup> <br>
  [[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/29368)] [[Code](https://github.com/SciYu/FedLF)] [[Poster](./poster/AAAI2024_poster.png)] [[bibtex](https://sciyu.github.io/bib/WACV2024.bib)] <br> 
  <!-- <a href="./poster/AAAI2024_poster.png" target="_blank">
    <img src="./poster/AAAI2024_poster.png" alt="AAAI 2024 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![WACV 2024](https://img.shields.io/badge/WACV-2024-orange) [**DocReal: Robust Document Dewarping of Real-Life Images via Attention-Enhanced Control Point Prediction**](https://openaccess.thecvf.com/content/WACV2024/papers/Yu_DocReal_Robust_Document_Dewarping_of_Real-Life_Images_via_Attention-Enhanced_Control_WACV_2024_paper.pdf)<br>
  **<u>Fangchen Yu</u>** (internship), Yina Xie, Lei Wu, Yafei Wen, Guozhi Wang, Shuai Ren, Xiaoxin Chen, Jianfeng Mao, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://openaccess.thecvf.com/content/WACV2024/papers/Yu_DocReal_Robust_Document_Dewarping_of_Real-Life_Images_via_Attention-Enhanced_Control_WACV_2024_paper.pdf)] [[Code](https://github.com/SciYu/DocReal)] [[Poster](./poster/WACV2024_poster.png)] [[bibtex](https://sciyu.github.io/bib/WACV2024.bib)] <br>
  <!-- <a href="./poster/WACV2024_poster.png" target="_blank">
    <img src="./poster/WACV2024_poster.png" alt="WACV 2024 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![NeurIPS 2023](https://img.shields.io/badge/NeurIPS-2023-orange) [**Boosting Spectral Clustering on Incomplete Data via Kernel Correction and Affinity Learning**](https://openreview.net/pdf?id=xFtuNq23D5)<br>
  **<u>Fangchen Yu</u>**, Runze Zhao, Zhan Shi, Yiwen Lu, Jicong Fan, Yicheng Zeng, Jianfeng Mao, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://openreview.net/pdf?id=xFtuNq23D5)] [[Code](https://github.com/SciYu/Spectral-Clustering-on-Incomplete-Data)] [[Video](https://neurips.cc/virtual/2023/poster/70019)] [[PPT](https://neurips.cc/media/neurips-2023/Slides/70019_iLAU9xR.pdf)] [[Poster](./poster/NeurIPS2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/NIPS2023.bib)] <br>
  <!-- <a href="./poster/NeurIPS2023_poster.png" target="_blank">
    <img src="./poster/NeurIPS2023_poster.png" alt="NeurIPS 2023 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![UAI 2023](https://img.shields.io/badge/UAI-2023-orange) [**Online Estimation of Similarity Matrices with Incomplete Data**](https://proceedings.mlr.press/v216/yu23a/yu23a.pdf)<br>
  **<u>Fangchen Yu</u>**, Yicheng Zeng, Jianfeng Mao, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://proceedings.mlr.press/v216/yu23a/yu23a.pdf)] [[Code](https://github.com/SciYu/Online-Similarity-Matrix-Correction)] [[Poster](./poster/UAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/UAI2023.bib)] <br>
  <!-- <a href="./poster/UAI2023_poster.png" target="_blank">
    <img src="./poster/UAI2023_poster.png" alt="UAI 2023 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![ECAI 2023](https://img.shields.io/badge/ECAI-2023-orange) [**Highly-Efficient Robinson-Foulds Distance Estimation with Matrix Correction**](https://ebooks.iospress.nl/doi/10.3233/FAIA230605) <br>
  **<u>Fangchen Yu</u>**, Rui Bao, Jianfeng Mao, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://ebooks.iospress.nl/doi/10.3233/FAIA230605)] [[Code](https://github.com/SciYu/Embedding-based-Matrix-Correction)] [[Poster](./poster/ECAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/ECAI2023.bib)] <br>
  <!-- <a href="./poster/ECAI2023_poster.png" target="_blank">
    <img src="./poster/ECAI2023_poster.png" alt="ECAI 2023 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![ICONIP 2023](https://img.shields.io/badge/ICONIP-2023-orange) [**From Incompleteness to Unity: A Framework for Multi-view Clustering with Missing Values**](https://link.springer.com/chapter/10.1007/978-981-99-8145-8_9) <br>
  **<u>Fangchen Yu</u>**, Zhan Shi, Yuqi Ma, Jianfeng Mao, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://link.springer.com/chapter/10.1007/978-981-99-8145-8_9)] [[bibtex](https://sciyu.github.io/bib/ICONIP2023.bib)]

- ![AAAI 2023](https://img.shields.io/badge/AAAI-2023-orange) [**Metric Nearness Made Practical**](https://ojs.aaai.org/index.php/AAAI/article/view/26041) <br>
  Wenye Li, **<u>Fangchen Yu</u>**, Zichen Ma<br>
  [[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26041)] [[Code](https://github.com/SciYu/Metric-Nearness-Made-Practical)] [[Poster](./poster/AAAI2023_poster.png)] [[bibtex](https://sciyu.github.io/bib/AAAI2023.bib)] <br>
  <!-- <a href="./poster/AAAI2023_poster.png" target="_blank">
    <img src="./poster/AAAI2023_poster.png" alt="AAAI 2023 Poster" width="250px" style="border:1px solid #ddd; border-radius:8px; padding:2px;">
  </a> -->

- ![ECML 2022](https://img.shields.io/badge/ECML-2022-orange) [**Calibrating Distance Metrics Under Uncertainty**](https://link.springer.com/chapter/10.1007/978-3-031-26409-2_14)<br>
  Wenye Li<sup>$\ast$</sup>, **<u>Fangchen Yu</u>**<br>
  [[Paper](https://link.springer.com/chapter/10.1007/978-3-031-26409-2_14)] [[bibtex](https://sciyu.github.io/bib/ECML2022.bib)]
  
- ![CIKM 2021](https://img.shields.io/badge/CIKM-2021-orange) [**Learning Sparse Binary Code for Maximum Inner Product Search**](https://dl.acm.org/doi/abs/10.1145/3459637.3482132) <br>
  Changyi Ma, **<u>Fangchen Yu</u>**, Yueyao Yu, Wenye Li<sup>$\ast$</sup> <br>
  [[Paper](https://dl.acm.org/doi/abs/10.1145/3459637.3482132)] [[bibtex](https://sciyu.github.io/bib/CIKM2021.bib)] [***(Best Short Paper Finalist)***](https://www.cikm2021.org/programme/best-paper-nominations)

<span class='anchor' id='educations'></span>

# 🏫 Educations
- *Sep. 2020 - Now*,<br>
*Ph.D. Candidate in Computer and Information Engineering*, at [**The Chinese University of Hong Kong, Shenzhen**](https://cuhk.edu.cn/en) (CUHK-SZ; Supervisors: [**Prof. Wenye Li**](https://sds.cuhk.edu.cn/en/teacher/317) and [**Prof. Jianfeng Mao**](https://sds.cuhk.edu.cn/en/teacher/268)).<br>
- *Oct. 2024 - Apr. 2025*,<br>
*Visiting Student*, at [**Mohamed Bin Zayed University of Artificial Intelligence**](https://mbzuai.ac.ae/) (MBZUAI, ranked Top10 globally in AI; Supervisor: [**Prof. Qiang Sun**](https://sites.google.com/view/qsun/)).<br>
- *Sep. 2016 - Jun. 2020*,<br> 
*B.S. in Physics*, at [**University of Chinese Academy of Sciences**](https://english.ucas.ac.cn/) (UCAS).<br>
- *Aug. 2019 - Dec. 2019*,<br> 
*Global Study Program*, at [**University of California, Davis**](https://www.ucdavis.edu/) (UCD).

<span class='anchor' id='internships'></span>

# 💻 Internships
- *Sep. 2020 - Aug. 2024*,<br>
*Graduate Research Assistant*, at [**Shenzhen Research Institute of Big Data**](https://www.sribd.cn/en), Shenzhen, China. (Supervisors: [**Prof. Wenye Li**](https://sds.cuhk.edu.cn/en/teacher/317), [**Prof. Yicheng Zeng**](https://science.sysu.edu.cn/teacher/928))<br>
- *Mar. 2023 - Jul. 2023*,<br>
*Research Intern*, at **Vivo AI Lab**, Shenzhen, China. (Group: Visual Understanding and Generation)

<span class='anchor' id='awards'></span>

# 🎖 Honors and Awards
- 2023, **PhD Fellowship**, Shenzhen Research Institute of Big Data
- 2022, **PhD Fellowship**, Shenzhen Research Institute of Big Data
- 2022, **Outstanding Teaching Assistant Award**, The Chinese University of Hong Kong, Shenzhen
- 2021, **Outstanding Teaching Assistent Award**, The Chinese University of Hong Kong, Shenzhen
- 2021, **PhD Fellowship**, Shenzhen Research Institute of Big Data
- 2020, **PhD Fellowship**, Shenzhen Research Institute of Big Data
- 2019, **Class III Scholarship**, University of Chinese Academy of Sciences
- 2017, **Merit Student**, University of Chinese Academy of Sciences



# 👨🏻‍💻 Academic Service
- **Program Committee Member:**<br>
ICML 2025, ICLR 2025, NeurIPS 2025/2024, WWW 2025, AAAI 2025/2024/2023, IJCAI 2025/2024, ECML 2022, etc.

<span class='anchor' id='teaching'></span>

# 👨🏻‍🏫 Teaching Assistant
- MAT3007 **Optimization**. Instructor: Prof. Junfeng Wu. Summer 2024.
- DDA4210 **Advanced Machine Learning**. Instructors: Prof. Jicong Fan & Prof. Tongxin Li. Spring & Fall 2023.
- MAT3300 **Mathematical Modeling**. Instructor: Prof. Gongqiu Zhang. Fall 2022.
- EIE4006 **Performance Evaluation of Communication Networks**. Instructor: Prof. Tony Lee. Summer 2022.
- STA3010 **Regression Analysis**. Instructor: Prof. Feng Yin. Spring 2022.
- MAT4003 **Number Theory**. Instructor: Prof. Jun Bo (Mario) Huan. Fall 2021.
- MAT4004 **Graph Theory**. Instructor: Prof. Jun Bo (Mario) Huang. Spring 2021.
- MAT3280 **Probability Theory**. Instructor: Prof. Kenneth Shum. Fall 2020.


*Last Update: 2025-05-04*