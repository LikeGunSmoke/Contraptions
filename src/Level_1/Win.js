import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { next } from '../state/actions/level_1/actions.js';
import { gsap } from 'gsap';

export default function Win({ ...props }) {

  const dispatch = useDispatch();
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const tl = gsap.timeline({repeat: -1});

  useEffect(() => {
    tl.to(star1.current, {y: 85, x: -40, opacity: 1, scale: 1.2, duration: 2});
    tl.to(star3.current, {y: 85, x: 85, opacity: 1, scale: 1.2, duration: 2});
    tl.to(star2.current, {y: 75, opacity: 1, scale: 1.5, duration: 2});
  });

  return (
    <svg style={{position: 'absolute', height: '65vh', width: '65vw', top: '15%', left: '15%', zIndex: 3}} version="1.1" viewBox="0 0 229.14 142.64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter x="-.001728" y="-.00216" width="1.0035" height="1.0043" colorInterpolationFilters="sRGB">
      <feGaussianBlur stdDeviation="0.108585"/>
      </filter>
    </defs>
    <g transform="translate(24.88 140.39)">
      <g transform="matrix(.53519 0 0 .53519 -24.881 -140.39)">
      <g transform="translate(-342.32,86.57)">
        <g transform="matrix(1.2175,0,0,1.1917,223.46,21.64)">
        <path d="m121.11-88.974h307.86s18.805 7.9855 18.805 21.96v174.35s-3.7609 22.626-16.118 23.291c-12.357 0.66546-310.01 0.66546-310.01 0.66546s-20.954 1.9964-22.028-22.626c-1.0746-24.622 0-177.68 0-177.68s5.3728-23.291 21.491-19.964z" fill="#f3f3f3" strokeWidth="3.0236" stroke="#b7b7b7"/>
        <path d="m120.14 50.736v50.283s-2.0113 20.784 10.727 20.784h81.794l-14.079-12.068h-57.658s-4.6931 1.3409-5.3635-8.0453c-0.67044-9.3862-0.67044-38.215-0.67044-38.215z" fill="#dadada"/>
        </g>
      </g>
      </g>
    </g>
    <g transform="translate(23.972 170.08)">
      <g transform="matrix(.26458 0 0 .26458 35.161 77.448)">
      <title>Layer 1</title>
      </g>
      <path d="m9.2699-113.64-0.23824 5.2414-3.6332-1.6677-3.1567 1.489-0.23824 3.7524 2.8589 2.0846 4.1693-2.3229 1.4295 5.8965-8.1599 0.47648-3.9906-3.395-1.3699-4.4671 1.906-4.7649 4.5862-2.6802z" fill="#e80311" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m178.99-81.647-4.2532-4.5741-6.0989-0.24075-6.7408 7.4631 7.1421 4.3334-0.72223 1.1235-4.7346-2.4877-2.5679 3.6914 5.4569 4.6544 8.1051 0.24074 3.2902-6.2594-6.7408-5.2161 0.88273-1.0432 3.9322 2.3272z" fill="#e80311" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <g transform="translate(.5104 9.4771)" fill="#58c454">
      <path d="m12.478-93.943-5.5057 3.5319-1.0388 6.7522 7.2716 6.6484 8.5182-2.2854 1.6621-8.2066-4.9863-6.129z" fill="#58c454" strokeWidth=".75" stroke="#000"/>
      <path d="m13.797-88.197-1.1427 2.4931 2.1815 1.4543 1.8698-0.72716 0.10388-2.4931z" fill="#fff" strokeWidth=".75" stroke="#000"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <g transform="translate(128.57 9.383)">
      <path d="m12.478-93.943-5.5057 3.5319-1.0388 6.7522 7.2716 6.6484 8.5182-2.2854 1.6621-8.2066-4.9863-6.129z" fill="#e80311" strokeWidth=".75" stroke="#000"/>
      <path d="m13.797-88.197-1.1427 2.4931 2.1815 1.4543 1.8698-0.72716 0.10388-2.4931z" fill="#fff" strokeWidth=".75" stroke="#000"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m130.63-83.641 0.45845 16.046 7.1824-0.45845-3.5148-16.046z" fill="#739bcf" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m23.586-84.902-2.8889 16.21 5.1359 0.32099 1.284-5.2964 3.2902 5.2964 4.3334 0.1605 1.1235-15.729-5.2161-0.72223-0.40124 4.9754-3.2902-5.1359z" fill="#f3e64f" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m152.04-84.013-2.8889 16.21 5.1359 0.32099 1.284-5.2964 3.2902 5.2964 4.3334 0.1605 1.1235-15.729-5.2161-0.72223-0.40124 4.9754-3.2902-5.1359z" fill="#f3e64f" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m46.556-85.315 2.1945 2.8214-3.5529 1.9855-1.5152-0.78373-2.3512 0.73149-1.672 3.5007 1.5152 3.3439 4.4934-0.57474-0.1045-1.045-3.0304 0.1045 0.26124-4.1799 6.4789 0.0523 0.05225 8.8823-11.129 1.463-3.4484-6.6879 0.94048-6.5834 4.7547-3.6052z" fill="#e80311" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <g transform="translate(102.19 -23.775)">
      <path d="m-55.4-62.015 1.7456 17.824h5.9719l-1.0106-4.7775 5.6962 4.9612 5.5125-2.2969-4.7775-4.5019 2.7562-2.6644-0.55125-5.6962-4.5019-3.5831z" fill="#f3e64f" strokeWidth=".75" stroke="#000"/>
      <path d="m-48.602-57.881 2.94 2.0212-1.47 1.9294-1.47 0.09188z" fill="#fff" strokeWidth=".75" stroke="#000"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <g transform="translate(106.2 48.327)">
      <path d="m-36.203-133.06 6.6436 13.961-6.0659 0.86655-0.5777-3.3699-5.2956-0.48141-1.1554 3.8513-5.5844-0.86655 7.7027-13.576z" fill="#739bcf" strokeWidth=".75" stroke="#000"/>
      <path d="m-37.839-127.96 1.0591 2.2145-3.0811-0.0963 0.77027-2.2145z" fill="#fff" strokeWidth=".75" stroke="#000"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <g transform="translate(153.58 50.7)">
      <path d="m-36.203-133.06 6.6436 13.961-6.0659 0.86655-0.5777-3.3699-5.2956-0.48141-1.1554 3.8513-5.5844-0.86655 7.7027-13.576z" fill="#739bcf" strokeWidth=".75" stroke="#000"/>
      <path d="m-37.839-127.96 1.0591 2.2145-3.0811-0.0963 0.77027-2.2145z" fill="#fff" strokeWidth=".75" stroke="#000"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m88.332-85.429 0.1085 6.8352-6.4012-0.97645 1.8444 11.934-8.6796 0.21699 1.157-12.066-6.3417-0.28502 0.14251-6.6267 18.241 0.42753z" fill="#58c454" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m134.04-87.47 0.10849 6.8352-6.4012-0.97645 1.8444 11.934-8.6796 0.21699 1.157-12.066-6.3417-0.28502 0.14251-6.6267 18.241 0.42753z" fill="#58c454" strokeWidth=".75" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m84.893-83.172v14.038l3.8751 4.7525h9.6512l4.3869-5.2643-0.21934-12.21-7.3846 0.07312 0.80426 9.2125-3.2171 2.0472 0.29246-12.649z" fill="#739bcf" strokeWidth=".964" stroke="#000"/>
    </g>
    <g transform="translate(24.88 140.39)">
      <path d="m100.23-88.105 0.5883 16.538 12.616-1.242-0.45757-5.2947-6.9288 0.65367 0.3922-10.066z" fill="#58c454" strokeWidth=".75" stroke="#000"/>
    </g>
    <g ref={star1} style={{opacity: 1}} transform="translate(24.88 140.39)">
      <g transform="matrix(.42898 0 0 .42898 5.5328 -139.53)">
      <path d="m61.467 77.803 3.4046 6.5188 7.1258 1.1612s0.6334 0.26392 0.18474 0.6598c-0.44866 0.39588-5.0408 5.0936-5.0408 5.0936l1.0557 7.073s0.23753 0.84454-0.60701 0.44866c-0.84454-0.39588-6.466-3.167-6.466-3.167l-6.2021 3.0615s-0.87093 0.6598-0.73897-0.29031c0.13196-0.95011 1.0821-7.0202 1.0821-7.0202l-4.8825-5.0936s-0.87093-0.6334 0.13196-0.79176c1.0029-0.15835 7.0466-1.1348 7.0466-1.1348l3.2726-6.2813s0.36949-0.68619 0.6334-0.23753z" fill="#f6ff04" strokeWidth=".26458px" stroke="#9ca200"/>
      <path d="m59.948 86.502-0.03999 3.186s-0.62654 1.5597-1.1598-0.02666l0.02666-2.9861s0.45324-1.2664 1.1731-0.1733z"/>
      <path d="m62.44 86.742 0.06665 3.0394s0.62654 1.5597 1.2264-0.06665l-0.03999-3.0927s-0.66653-1.3997-1.2531 0.11998z" fill="#0e0e0e"/>
      <path d="m59.06 86.935-0.0089 1.0793s0.24084 1.1507 0.63332 0.0089l0.01782-1.2577s-0.41033-1.008-0.64225 0.16948z" fill="#fff"/>
      <path d="m63.404 86.712-0.0089 1.1774s-0.30328 1.2399-0.63332-0.01783l-0.0089-1.1418s0.30328-0.97229 0.65117-0.01784z" fill="#fff"/>
      </g>
    </g>
    <g ref={star2} style={{opacity: 0}} transform="translate(24.88 140.39)">
      <g transform="matrix(.42898 0 0 .42898 60.817 -140.77)">
      <path d="m61.467 77.803 3.4046 6.5188 7.1258 1.1612s0.6334 0.26392 0.18474 0.6598c-0.44866 0.39588-5.0408 5.0936-5.0408 5.0936l1.0557 7.073s0.23753 0.84454-0.60701 0.44866c-0.84454-0.39588-6.466-3.167-6.466-3.167l-6.2021 3.0615s-0.87093 0.6598-0.73897-0.29031c0.13196-0.95011 1.0821-7.0202 1.0821-7.0202l-4.8825-5.0936s-0.87093-0.6334 0.13196-0.79176c1.0029-0.15835 7.0466-1.1348 7.0466-1.1348l3.2726-6.2813s0.36949-0.68619 0.6334-0.23753z" fill="#f6ff04" strokeWidth=".26458px" stroke="#9ca200"/>
      <path d="m59.948 86.502-0.03999 3.186s-0.62654 1.5597-1.1598-0.02666l0.02666-2.9861s0.45324-1.2664 1.1731-0.1733z"/>
      <path d="m62.44 86.742 0.06665 3.0394s0.62654 1.5597 1.2264-0.06665l-0.03999-3.0927s-0.66653-1.3997-1.2531 0.11998z" fill="#0e0e0e"/>
      <path d="m59.06 86.935-0.0089 1.0793s0.24084 1.1507 0.63332 0.0089l0.01782-1.2577s-0.41033-1.008-0.64225 0.16948z" fill="#fff"/>
      <path d="m63.404 86.712-0.0089 1.1774s-0.30328 1.2399-0.63332-0.01783l-0.0089-1.1418s0.30328-0.97229 0.65117-0.01784z" fill="#fff"/>
      </g>
    </g>
    <g ref={star3} style={{opacity: 0}} transform="translate(24.88 140.39)">
      <g transform="matrix(.42898 0 0 .42898 119.37 -138.89)">
      <path d="m61.467 77.803 3.4046 6.5188 7.1258 1.1612s0.6334 0.26392 0.18474 0.6598c-0.44866 0.39588-5.0408 5.0936-5.0408 5.0936l1.0557 7.073s0.23753 0.84454-0.60701 0.44866c-0.84454-0.39588-6.466-3.167-6.466-3.167l-6.2021 3.0615s-0.87093 0.6598-0.73897-0.29031c0.13196-0.95011 1.0821-7.0202 1.0821-7.0202l-4.8825-5.0936s-0.87093-0.6334 0.13196-0.79176c1.0029-0.15835 7.0466-1.1348 7.0466-1.1348l3.2726-6.2813s0.36949-0.68619 0.6334-0.23753z" fill="#f6ff04" strokeWidth=".26458px" stroke="#9ca200"/>
      <path d="m59.948 86.502-0.03999 3.186s-0.62654 1.5597-1.1598-0.02666l0.02666-2.9861s0.45324-1.2664 1.1731-0.1733z"/>
      <path d="m62.44 86.742 0.06665 3.0394s0.62654 1.5597 1.2264-0.06665l-0.03999-3.0927s-0.66653-1.3997-1.2531 0.11998z" fill="#0e0e0e"/>
      <path d="m59.06 86.935-0.0089 1.0793s0.24084 1.1507 0.63332 0.0089l0.01782-1.2577s-0.41033-1.008-0.64225 0.16948z" fill="#fff"/>
      <path d="m63.404 86.712-0.0089 1.1774s-0.30328 1.2399-0.63332-0.01783l-0.0089-1.1418s0.30328-0.97229 0.65117-0.01784z" fill="#fff"/>
      </g>
    </g>
    <g transform="translate(24.88 140.39)">
      <text x="54.772659" y="-49.370163" fontFamily="AppleGothic" fontSize="11.289px" line-height="1.25" strokeWidth=".26458" xmlSpace="preserve"><tspan x="54.772659" y="-49.370163" fontFamily="Arial Black" strokeWidth=".26458">You Won!!!</tspan></text>
    </g>
    <g onClick={() => dispatch(next)} transform="translate(24.88 140.39)">
      <g transform="matrix(.26458 0 0 .26458 29.889 -7.5301)">
      <g transform="matrix(2.2487 0 0 2.3996 -216.01 -220.06)" fill="#37e072" stroke="#008014">
        <path d="m173.31 53.08c13.216 0.01004 26.433-0.0201 39.65 0.01512 4.7707 0.11394 8.9065 6.1214 8.4355 12.547-0.1296 6.4507-4.7899 11.605-9.5039 11.059-13.014-0.01004-26.027 0.0201-39.041-0.01512-4.7707-0.11393-8.9065-6.1214-8.4355-12.547 0.15103-6.1631 4.353-11.197 8.8952-11.059z" fill="#37e072" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1202" stroke="#008014"/>
      </g>
      <text transform="scale(.82369 1.214)" x="205.29118" y="-43.297886" fill="#fdfdfd" fontFamily="Apple SD Gothic Neo" fontSize="27.487px" line-height="1.25" strokeWidth=".51538" xmlSpace="preserve"><tspan x="205.29118" y="-43.297886" strokeWidth=".51538">Next Level</tspan></text>
      </g>
    </g>
    </svg>

  );
};