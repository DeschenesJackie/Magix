<?php
	require_once("action/CommonAction.php");

	class ajaxGameAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$result=[];
			if (isset($_SESSION["key"])) {
				$data=[];
				$data["key"] = $_SESSION["key"];
				if (isset($_POST["UID"]) && !isset($_POST["targetUID"])) {
					$data["type"] = "PLAY";
					$data["uid"] = $_POST["UID"];
				}
				elseif (isset($_POST["UID"]) && isset($_POST["targetUID"])) {
					$data["type"] = "ATTACK";
					$data["uid"] = $_POST["UID"];
					$data["targetuid"] = $_POST["targetUID"];
				}
				$result=parent::callAPI("games/action", $data);
			}

			return compact("result");
		}
	}