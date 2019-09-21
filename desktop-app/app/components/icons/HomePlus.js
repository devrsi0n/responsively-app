import React, {Fragment} from 'react';

export default ({width, height, color, padding, margin}) => (
  <Fragment>
    <svg
      height={height}
      width={width}
      fill={color}
      stroke={color}
      style={{padding, margin}}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 66 66"
    >
      <defs>
        <clipPath id="_clipPath_1jbp17xur21ul8z5IuRkxmo4gJ5cDGqz">
          <rect width="66" height="66" />
        </clipPath>
      </defs>
      <g clip-path="url(#_clipPath_1jbp17xur21ul8z5IuRkxmo4gJ5cDGqz)">
        <g>
          <path d=" M 47.973 42.767 C 47.865 41.943 47.445 41.211 46.786 40.704 L 37.958 33.907 L 37.958 27.081 C 37.958 25.367 36.564 23.972 34.85 23.972 C 33.137 23.972 31.742 25.367 31.742 27.081 L 31.742 29.119 L 25.896 24.617 C 25.355 24.202 24.681 23.972 23.999 23.972 C 23.316 23.972 22.642 24.201 22.101 24.618 L 1.21 40.704 C -0.147 41.751 -0.401 43.706 0.645 45.064 C 1.238 45.834 2.136 46.275 3.109 46.275 C 3.61 46.275 4.091 46.16 4.526 45.935 L 4.526 62.107 C 4.526 63.821 5.921 65.217 7.635 65.217 L 21.601 65.217 L 21.601 50.534 L 26.387 50.534 L 26.387 65.215 L 40.155 65.215 C 41.869 65.215 43.263 63.821 43.263 62.105 L 43.263 45.817 C 43.752 46.118 44.309 46.275 44.889 46.275 C 45.86 46.275 46.759 45.834 47.353 45.065 C 47.861 44.407 48.082 43.591 47.973 42.767 Z  M 45.076 43.309 C 45.016 43.388 44.934 43.401 44.89 43.401 C 44.838 43.401 44.791 43.385 44.749 43.352 L 40.39 39.997 L 40.39 62.107 C 40.39 62.237 40.285 62.342 40.156 62.342 L 29.262 62.342 L 29.263 47.66 L 18.727 47.66 L 18.727 62.342 L 7.635 62.342 C 7.506 62.342 7.402 62.236 7.402 62.107 L 7.402 40.156 L 3.252 43.351 C 3.21 43.384 3.162 43.4 3.11 43.4 C 3.066 43.4 2.984 43.388 2.923 43.309 C 2.874 43.246 2.871 43.18 2.877 43.137 C 2.882 43.093 2.902 43.03 2.965 42.982 L 23.858 26.896 C 23.962 26.817 24.038 26.817 24.144 26.896 L 34.617 34.962 L 34.617 27.081 C 34.617 26.951 34.723 26.847 34.852 26.847 C 34.98 26.847 35.087 26.951 35.087 27.081 L 35.087 35.321 L 45.037 42.982 C 45.1 43.03 45.119 43.092 45.125 43.136 C 45.131 43.182 45.126 43.248 45.076 43.309 Z " />
        </g>
        <g>
          <line
            x1="51"
            y1="2"
            x2="51"
            y2="28"
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="3"
          />
          <line
            x1="64"
            y1="15"
            x2="38"
            y2="15"
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="3"
          />
        </g>
      </g>
    </svg>
  </Fragment>
);