<?php
	require_once("action/CommonAction.php");

	class gameAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$retour = [];
			if (!empty($_COOKIE["username"])) {
				$retour["username"]= $_COOKIE["username"];
			}

			if (!isset($_SESSION["key"])) {
				header("location:index.php");
			}
			if (isset($_GET["forfeit"])) {
				header("location:lobby.php");
			}


			return $retour;
		}
	}