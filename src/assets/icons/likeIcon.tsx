import { FC } from 'react';
import { IconInterface } from '../../utils';

const LikeIcon: FC<IconInterface> = ({ color }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_460_2819)">
      <path
        d="M7.32619 0.0832872C6.89739 0.220006 6.70785 0.412655 6.28526 1.15839C5.86889 1.8917 5.25677 2.86738 4.81554 3.50436C4.4582 4.01706 3.80258 4.91816 3.78393 4.91816C3.77772 4.91816 3.73111 4.87776 3.68139 4.82805C3.63168 4.77833 3.53846 4.7224 3.4701 4.70376C3.30852 4.66026 0.567933 4.65715 0.406357 4.70065C0.266531 4.74104 0.114276 4.90573 0.0707742 5.07041C0.0490235 5.15431 0.042809 6.44692 0.0459162 9.16576C0.055238 13.6091 0.0365945 13.2394 0.27896 13.4227L0.39082 13.5097H1.93512H3.47631L3.60371 13.4258C3.6845 13.373 3.74664 13.3015 3.7715 13.2363L3.80879 13.1306L4.04805 13.3233C4.35566 13.5718 4.61046 13.7117 4.98022 13.8422L5.27541 13.9447L7.07761 13.954C9.08489 13.9633 9.15325 13.9602 9.61934 13.7583C9.99221 13.5998 10.188 13.4693 10.4645 13.199C10.6944 12.9784 10.8778 12.7142 12.189 10.7442C13 9.52931 13.6991 8.4542 13.7427 8.35166C13.8794 8.05337 13.9322 7.77682 13.9322 7.41017C13.9322 6.77629 13.7271 6.26981 13.2921 5.83169C12.9192 5.45571 12.5277 5.24753 12.0306 5.16985C11.9125 5.14809 11.2537 5.13567 10.4241 5.13567H9.01964L9.03518 5.0642C9.0445 5.02691 9.18743 4.39303 9.34901 3.65972C9.61312 2.48519 9.65041 2.28943 9.65041 2.02842C9.65041 1.79227 9.63177 1.68662 9.56651 1.49087C9.42358 1.06828 9.24957 0.83524 8.83631 0.524515C8.45412 0.235542 8.32362 0.154754 8.13718 0.0926085C7.95385 0.0304642 7.50952 0.0242491 7.32619 0.0832872ZM8.12164 1.27958C8.5722 1.61827 8.68095 1.84199 8.60016 2.26146C8.57841 2.37954 8.4013 3.1781 8.21175 4.03259C7.95696 5.16985 7.86996 5.6235 7.87928 5.72293C7.89482 5.86897 7.96318 5.98084 8.09989 6.08027C8.18379 6.14552 8.22729 6.14552 10.0699 6.16106L11.956 6.17659L12.1642 6.27602C12.7918 6.57432 13.0808 7.27656 12.826 7.88868C12.8043 7.94151 12.13 8.97001 11.3252 10.1756C9.73741 12.5527 9.7312 12.5651 9.31483 12.7608C8.92331 12.9504 8.91088 12.9504 7.15529 12.9504H5.55506L5.3127 12.8634C5.03304 12.7671 4.78757 12.6179 4.61046 12.4408C4.54521 12.3755 4.34013 12.1239 4.15991 11.8815L3.83054 11.4465V8.90786V6.37235L3.9859 6.23252C4.66017 5.62661 5.87511 3.89898 7.10558 1.79538C7.30444 1.45358 7.49709 1.14907 7.53438 1.118C7.56856 1.08693 7.64934 1.06518 7.7177 1.06518C7.81713 1.06518 7.88239 1.10246 8.12164 1.27958ZM2.80515 9.0974V12.4998H1.93512H1.06509V9.0974V5.69497H1.93512H2.80515V9.0974Z"
        className={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_460_2819">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LikeIcon;
